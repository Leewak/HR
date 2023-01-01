import * as React from "react"

import InnerLayout from "../../components/innerlayout"
import Seo from "../../components/seo"

const VerifyPage = ({ location }) => {
  const params = new URLSearchParams(location.search)
  const email = params.get("email")
  const token = params.get("token")
  const [message, setMessage] = React.useState("")
  const adminUrl = process.env.GATSBY_ADMIN_SITE_URL

  React.useEffect(() => {
    if(message == "") {
      handleVerification();
    }
  });
 
  let handleVerification = async () => {
    try {
      let res = await fetch(adminUrl+'/api/user/verify', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          token: token,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("Email Verified Successfully");
      } else {
        setMessage("An Error Occured, Please try again or contact us.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InnerLayout title="Verify Account">
      <div className="max-w-7xl px-12 md:px-24">
          <div className="message">{message ? <p className="text-teal-400 font-bold">{message}</p> : null}</div>
      </div>
    </InnerLayout>
  )
}

export const Head = () => <Seo title="Reset User Password" />

export default VerifyPage
