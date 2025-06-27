import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "../../generated/prisma";
import { generateToken } from "../../middleware/jwt/jwt";
import { profile } from "console";
const prisma = new PrismaClient();

// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_CLIENT_ID!,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     callbackURL: "http://hocalhost:3000/auth/google/callback",
//   },
//   async (accessToken, _refreshToken, profile, done) => {

//     try {
//       const email = profile.emails?.[0]?.value;
//       const name = profile.displayName;
//       if (!email) {
//         return done(new Error("Email is not provided by google"), undefined);
//       }
//       let user = await prisma.user.findUnique({ where: { email: email } });
//       if (!user) {
//         user = await prisma.user.create({
//           data: {
//             email: email,
//             name: name,
//             role: "buyer",
//             googleId: profile.id
//           }
//         })
//       }

//       const token = generateToken(user.id,user.role);

//       return done(null, {
//         userId: user.id,
//         role: user.role,
//         token,
//       })

//     } catch (error) {
//       console.log(error);
//       return done(error, undefined)
//     }

//   }
// ))

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async (accessToken, _refreshToken, profile, done) => {
    try {
      const email = profile.emails?.[0]?.value;
      const name = profile.displayName;
      if (!email) {
        return done(new Error("Email is not provided by google"), undefined);
      }
      let user = await prisma.user.findUnique({ where: { email: email } });
      if (!user) {
        user = await prisma.user.create({
          data: {
            email: email,
            name: name,
            role: "buyer",
            googleId: profile.id
          }
        })
      }
      const token = generateToken(user.id, user.role);
      return done(null, {
        userId: user.id,
        role: user.role,
        token
      })
    } catch (error) {
      console.log(error);
      return done(error, undefined)
    }
  }
))