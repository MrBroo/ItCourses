import { useNavigate } from "react-router-dom";
import { Container, Spinner } from "reactstrap"
import axios from "axios";
import { useEffect, useReducer, useState } from "react";


const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length === 0) {
            setMinLengthError(false)
          } else {
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          }
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'phone_number':
          let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
          reg.test(value) ? setPhoneNumberError(true) : setPhoneNumberError(false)
      }

    }
  }, [value])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    phoneNumberError
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {

    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value, onChange, onBlur, isDirty, ...valid
  }
}

const ACTIONS = {
  USER_ADD: "user-add",
};

function reducer(state, action) {
  if (action.type === ACTIONS.USER_ADD) {
    state = {
      user: {
        ...state.user,
        [action.payload.key]: action.payload.value,
      },
    };
  }
  return state;
}



function SignUp() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const fullName = useInput("", { isEmpty: true, minLength: 3 })
  const phone_number = useInput("", { isEmpty: true, minLength: 9, maxLength: 13 })
  const username = useInput("", { isEmpty: true, minLength: 3, maxLength: 15 })
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 15 })


  const initialUser = {
    fullName: "",
    phone_number: "",
    username: "",
    password: "",
    user_role: "ADMIN"
  }

  const [state, dispatch] = useReducer(reducer, { user: initialUser })

  function getInputValues(e) {
    dispatch({
      type: ACTIONS.USER_ADD,
      payload: {
        key: e.target.name,
        value: e.target.value
      },
    });
  }
  function addUser() {
    setLoading(true)
    axios.post("http://localhost:5852/api/itCourses/user/add", state.user).then((response) => {

      if (response.data.status_code === 0)
        navigate("/userCourses")
    })
      .catch((error) => {
        if (error.response.status === -101 || error.response.status === 400)
          setText(
            <div className="d-flex justify-content-center">
              <div className="signUpAlert">Iltimos ma`lumotlarni to`g`ri to`ldiring</div>
            </div>
          )
        setTimeout(() => {
          setText(" ")
        }, 4000)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response.status >= 500)
          setLoading(false)
      })

  }



  return (
    <div className="signWrapper">
      <div className="signBackColor">
        <Container>
          <div className="signContent">
            <div>
              <h2 className="signLeft text-white">SignUp</h2>
              <hr className="text-white" />
              <p className="signUpText text-white">  The href attribute requires a valid value to be accessible. Provide <br />
                a as the href value. If you provide a valid href, but still need the <br />
                The href attribute requires a valid value to be accessible. Provide <br />
                a as the href value. If you provide a valid href, but still need the <br />
                button and change still need the element to resemble a link . If you </p>
            </div>
            <div>
              {text}
              <div className="signUp">

                <div>
                  <h2 className="textsign text-center mt-3 mb-4">SignUp</h2>
                </div>

                <Container>
                  <div className="pb-2">
                    <div>
                      <div className="">
                        <input onBlur={e => fullName.onBlur(e)} onChange={e => { fullName.onChange(e); getInputValues(e) }} value={fullName.value} id="fullName" name="fullName" placeholder="Ism" className="py-1 px-3 m-0" />
                        {(fullName.isDirty && fullName.isEmpty) && <div className="errorInput">Bo`sh bo`lishi kerak emas</div>}
                        {(fullName.isDirty && fullName.minLengthError) && <div className="errorInput">3ta dan kam bo`lmasligi kerak</div>}
                      </div>
                      <div className="my-3">
                        <input onBlur={e => phone_number.onBlur(e)} onChange={e => { phone_number.onChange(e); getInputValues(e) }} value={phone_number.value} id="phone_number" name="phone_number" placeholder="Telefon" className="py-1 px-3 m-0" />
                        {(phone_number.isDirty && phone_number.isEmpty) && <div className="errorInput">Bo`sh bo`lishi kerak emas</div>}
                        {(phone_number.isDirty && phone_number.minLengthError) && <div className="errorInput">9ta dan kam bo`lmasligi kerak</div>}
                        {(phone_number.isDirty && phone_number.phoneNumberError) && <div className="errorInput">telefon raqamini to`g`ri kiriting</div>}
                      </div>
                      <div>
                        <input onBlur={e => username.onBlur(e)} onChange={e => { username.onChange(e); getInputValues(e) }} value={username.value} id="username" name="username" placeholder="Username" className="py-1 px-3 m-0" />
                        {(username.isDirty && username.isEmpty) && <div className="errorInput">Bo`sh bo`lishi kerak emas</div>}
                        {(username.isDirty && username.minLengthError) && <div className="errorInput">3ta dan kam bo`lmasligi kerak</div>}
                        {(username.isDirty && username.maxLengthError) && <div className="errorInput">15ta dan kam bo`lmasligi kerak</div>}
                      </div>
                      <div className="my-3">
                        <input onBlur={e => password.onBlur(e)} onChange={e => { password.onChange(e); getInputValues(e) }} value={password.value} id="password" name="password" placeholder="Parol" className="py-1 px-3 m-0" />
                        {(password.isDirty && password.isEmpty) && <div className="errorInput">Bo`sh bo`lishi kerak emas</div>}
                        {(password.isDirty && password.minLengthError) && <div className="errorInput">6ta dan kam bo`lmasligi kerak</div>}
                        {(password.isDirty && password.maxLengthError) && <div className="errorInput">15ta dan kam bo`lmasligi kerak</div>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr className="text-white" />
                    <div className="text-center text-white">Ro`yxatdan o`tganmisiz?
                      <a href="/SignIn" className="text-decoration-none text-white mx-2">Sign In</a>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end my-4">
                    {!loading && <button className="signButton" onClick={(e) => addUser(e)}>Sign Up</button>}
                    {loading &&
                      <button className="signButton" disabled>
                        <Spinner size="sm" style={{ marginRight: "5px" }}>Loading...</Spinner>Sign Up</button>}
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )

}
export default SignUp