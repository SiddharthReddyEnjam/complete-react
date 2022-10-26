export default function Login() {
  return (
    <div className='login'>
      <form>
        <input type='email' placeholder='Enter your email' />
        <input type='password' placeholder='Enter your pasword' />
        <button className='login-btn'>Submit</button>
      </form>
    </div>
  );
}
