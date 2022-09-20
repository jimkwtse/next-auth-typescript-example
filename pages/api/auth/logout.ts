import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.SECRET

// See https://www.keycloak.org/docs/latest/upgrading/index.html#openid-connect-logout
       
export default  (req: NextApiRequest, res: NextApiResponse) => {
    
    const token = getToken({ req, secret })

    res.redirect(process.env.KEYCLOAK_ISSUER+ '/protocol/openid-connect/logout'
                // + '?id_token_hint=' + token
                //+ '&post_logout_redirect_uri=' + encodeURIComponent(process.env.NEXTAUTH_URL)
                 );
  };