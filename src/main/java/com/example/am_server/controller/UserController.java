package com.example.am_server.controller;

import com.example.am_server.entity.User;
import com.example.am_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

//UserController.java
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @GetMapping("/user")
    public List<User> userApi() {

        return userService.getUserApi();
    }
    //해당url 경로에 form양식의 데이터를 보내면 매개변수 user에 담아온다.
    @PostMapping("/user/create")
    public String createUserPro(@RequestBody User user) {
        userService.createUser(user);
        return "redirect:http://localhost:3000/";
    }
    @GetMapping("/user/delete")
    public String userDeletePro(Integer id) {
        userService.userDelete(id);

        return "redirect:http://localhost:3000/";
    }
    @PostMapping("/user/update")
    public String userUpdatePro(Integer id, User user) {
        User userTemp = userService.userDetail(id);
//        userTemp.setIntroduce(user.getIntroduce());

        userService.createUser(userTemp);
        return "redirect:http://localhost:3000/";
    }
}


