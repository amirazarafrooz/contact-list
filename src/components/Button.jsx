import '../CSS/Button.css'

const Button = ({buttonText,submitFormHandler}) => {
    return (
        <button className='btn' type="submit"  onClick={submitFormHandler} >{buttonText}</button>



    )

}

export default Button