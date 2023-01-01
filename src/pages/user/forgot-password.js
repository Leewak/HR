import * as React from "react"

import InnerLayout from "../../components/innerlayout"
import Seo from "../../components/seo"

const ResetPasswordPage = ({ location }) => {
  const adminUrl = process.env.GATSBY_ADMIN_SITE_URL;
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
 
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(adminUrl+'/api/user/reset', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setMessage("Password Reset Link Sent, Please Check Your Email.");
      } else {
        setMessage("An Error Occured, Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InnerLayout title="Forgot Password">
      <div className="max-w-7xl px-12 md:px-24">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Email Here"
              required
            />
          </div>
          <div className="message">{message ? <p className="text-teal-400 font-bold">{message}</p> : null}</div>
          <input
            type="submit"
            className="w-40 px-2 py-2 border border-gray-300 bg-teal-400 text-white font-bold text-sm text-center rounded-lg hover:bg-green-400 mt-4"
            value="Submit"
          />
        </form>
      </div>
    </InnerLayout>
  )
}

export const Head = () => <Seo title="Reset User Password" />

export default ResetPasswordPage
