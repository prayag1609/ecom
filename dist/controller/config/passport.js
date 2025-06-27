"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const prisma_1 = require("../../generated/prisma");
const jwt_1 = require("../../middleware/jwt/jwt");
const prisma = new prisma_1.PrismaClient();
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
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, (accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const email = (_b = (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value;
        const name = profile.displayName;
        if (!email) {
            return done(new Error("Email is not provided by google"), undefined);
        }
        let user = yield prisma.user.findUnique({ where: { email: email } });
        if (!user) {
            user = yield prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    role: "buyer",
                    googleId: profile.id
                }
            });
        }
        const token = (0, jwt_1.generateToken)(user.id, user.role);
        return done(null, {
            userId: user.id,
            role: user.role,
            token
        });
    }
    catch (error) {
        console.log(error);
        return done(error, undefined);
    }
})));
