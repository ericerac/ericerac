import admin from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
// import { useState } from "nuxt/app";
import { useCookies } from "vue3-cookies";
// import { useCookies } from '@vueuse/integrations/useCookies';

export default defineEventHandler(async (event) => {
    const { cookies } = useCookies();
    let data = getQuery(event)
    console.log("DATA SERVER LOGIN", getQuery(event));

    let ResponseUser = "";

    await admin.findOne({
        email: data.email
    }).lean().then(async function (user) {
        console.log("USER FOUND", user);
        if (user == null) {
            console.log("USER NULL");
            return {
                logged:false,
                user:null
            }
        } else {     
            return {
                logged: await bcrypt.compare(data.password, user.password),
                user: user
            }
        }
    }).then(isEquals => {
        if (!isEquals.logged ){         
            ResponseUser = {
                token:null,
                userId:null,
                user:false,
                message:"Utilisateur inconnu",
                userLogged:false
            }
            return
        }
        else {
            console.log("USER ", isEquals.logged);
            let user = isEquals.user
            ResponseUser = {
                token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                    expiresIn: "1h",
                }),
                userId: user._id,
                user: true,
                message:"Bienvenu(e)",
                userLogged:true
            }
            return
        }

    }).catch(error => {
        throw error;
    })

return ResponseUser
    
})