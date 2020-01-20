<template>
   <div>
       <div class="vertical-align text-center"  data-animsition-in="fade-in" data-animsition-out="fade-out">
      <div class="page-content vertical-align-middle">
        <div class="brand" style="margin-top:50px" >
          <center>
            <p id="icon" style="rgb(46, 14, 52) 14px 14px 0px, rgb(46, 14, 53) 15px 15px 0px, rgb(47, 14, 54) 16px 16px 0px, rgb(47, 14, 54) 17px 17px 0px, rgb(48, 15, 55) 18px 18px 0px, rgb(48, 15, 55) 19px 19px 0px, rgb(49, 15, 56) 20px 20px 0px, rgb(49, 15, 56) 21px 21px 0px, rgb(50, 15, 57) 22px 22px 0px, rgb(50, 15, 57) 23px 23px 0px, rgb(51, 15, 58) 24px 24px 0px, rgb(51, 16, 59) 25px 25px 0px, rgb(52, 16, 59) 26px 26px 0px, rgb(52, 16, 60) 27px 27px 0px, rgb(53, 16, 60) 28px 28px 0px, rgb(53, 16, 61) 29px 29px 0px, rgb(54, 16, 61) 30px 30px 0px, rgb(54, 16, 62) 31px 31px 0px, rgb(55, 17, 62) 32px 32px 0px, rgb(55, 17, 63) 33px 33px 0px, rgb(56, 17, 63) 34px 34px 0px; font-size: 70px; color: rgb(255, 255, 255); height: 80px; width: 80px; line-height: 80px; border-radius: 50%; text-align: center; background-color: #ff4c52;">G</p> 
          </center>          
        </div>
        <p>Sign up to start shopping</p>
        <form method="post" role="form">
          <div class="form-group">
            <label class="sr-only" for="inputName">Name</label>
            <input type="text" v-model="userObj.name" class="form-control" id="inputName" v-validate="'required'" name="name" placeholder="Name">
             <span style="color:red"><small>{{ errors.first('name') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputEmail">Email</label>
            <input type="email" v-model="userObj.email" v-validate="'required|email'" class="form-control" id="inputEmail" name="email" placeholder="Email">
             <span style="color:red"><small>{{ errors.first('email') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputEmail">Email</label>
            <input type="email" v-model="userObj.phone" v-validate="'required'" class="form-control" id="inputEmail" name="phone" placeholder="Telephone Number">
             <span style="color:red"><small>{{ errors.first('phone') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputPassword">Password</label>
            <input v-validate="'required'" class="form-control" name="password" v-model="userObj.password" type="password" placeholder="Password" ref="password">
             <span style="color:red"><small>{{ errors.first('password') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputPasswordCheck">Retype Password</label>
            <input v-validate="'required|confirmed:password'" class="form-control" v-model="userObj.password_confirmation" name="password_confirmation" type="password"  placeholder="Password Confirmation" data-vv-as="password">
             <span style="color:red"><small>{{ errors.first('password_confirmation') }}</small></span>
          </div>
          

          <button type="submit" @click.prevent="signupUser()" class="btn btn-dark btn-block">Register</button>
        </form>
        <p>Have account already? Please go to <router-link to="/login">Login</router-link></p>

        <footer class="page-copyright page-copyright-inverse">
          <p>WEBSITE BY amazingSurge</p>
          <p>© 2018. All RIGHT RESERVED.</p>
          <div class="social">
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-twitter" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-facebook" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-dribbble" aria-hidden="true"></i>
        </a>
          </div>
        </footer>
      </div>
    </div>
   </div>
</template>
<script>
import {signupMixin} from '@/mixins'
    export default{
      data(){
        return {
        }
      },
      mixins:[signupMixin],
     
    }
</script>