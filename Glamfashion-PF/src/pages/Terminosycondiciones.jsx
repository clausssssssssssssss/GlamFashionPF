import React from "react";
import { Link } from "react-router-dom";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-lg font-semibold tracking-[0.3em] uppercase mb-6 text-center">
      T E R M I N S A N D C O N D I C I O N S
      </h1>

      <div className="max-w-xl text-sm leading-relaxed text-left space-y-2 mb-10">
      <p>By using our app, you agree to these terms and conditions.</p>
<p>If you do not agree, we recommend that you do not use our services.</p>
<p>
You must register with accurate information and maintain the security of your account,
without misusing or illegally using the app.
</p>
<p>
We collect and store personal, financial, and location information
in accordance with our Privacy Policy.
</p>
<p>
Payments are processed securely, and you are responsible for any
activity on your account.
</p>
<p>
All content on the app is the property of GLAMFASHION and may not be
copied without authorization.
</p>
<p>
We are not responsible for any damages arising from the use of the app, and
we reserve the right to modify these terms at any time.
</p>
<p>
For inquiries, please contact us at: glamfashionhelp.com.
By using the app, you confirm that you accept these terms.
</p>
</div>

      <Link
        to="/PrimeraVista"
        className="bg-black text-white px-8 py-2 rounded-full uppercase font-semibold tracking-wide hover:bg-gray-800 transition"
      >  
       I accept
      </Link>
    </div>
  );
};

export default TerminosCondiciones;
