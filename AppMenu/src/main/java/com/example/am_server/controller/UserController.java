package com.example.am_server.controller;

import com.example.am_server.entity.User;
import com.example.am_server.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
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
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // 사용자의 인증 확인 로직을 구현하고, 인증이 성공하면 토큰을 생성하여 반환합니다.
        // 예를 들어, 사용자의 아이디와 비밀번호를 확인하여 토큰을 생성하고 반환하는 방식으로 구현할 수 있습니다.
        String token = null;
        if (userService.authenticate(user.getEmail(), user.getPassword())) {
            token = generateToken(user.getEmail());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.ok(token);
//                    ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    private String generateToken(String email) {
        String secretKey = "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKey"; // 보안을 위해 실제 프로젝트에서는 보안적으로 안전한 방법으로 비밀 키를 관리해야 합니다.
        long expirationMs = 3600000; // 토큰 만료 시간 (1시간)

        Date now = new Date();
        Date expiration = new Date(now.getTime() + expirationMs);

        String token = Jwts.builder()
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();

        return token;
    }

}


