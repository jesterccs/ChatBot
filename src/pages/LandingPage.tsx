import { GoogleOAuthProvider } from "@react-oauth/google";
import  "../styles/Landingpage.css";
import Google from '../google';
function LandingPage() {
    return (
      <div className="container">
        <h1 className="title">Welcome to Landing Page</h1>
        <p className="subtitle">
          This is some sample text for the landing page.
        </p>
        <GoogleOAuthProvider clientId="184327814201-6c389qeaurcnsdi6q70fv9hcb614punn.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </div>
    );
  }
  
  export default LandingPage;
  