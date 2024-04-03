package com.example.am_server.service;

import com.example.am_server.entity.User;
import com.example.am_server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUserApi() {

        return userRepository.findAll();
    }

    public void createUser(User user) {
        userRepository.save(user);
    }
    public void userDelete(Integer id) {
        userRepository.deleteById(id);
    }
    //특정 id에 대한 데이터 가져오기
    public User userDetail(Integer id) {
        return userRepository.findById(id).get();
    }
    public boolean authenticate(String email, String password) {
        // 여기에 사용자의 인증을 처리하는 로직을 구현합니다.
        // 예를 들어, 입력받은 이메일과 비밀번호를 가진 사용자가 존재하는지 확인하는 방식으로 구현할 수 있습니다.
        User user = UserRepository.findbyemail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true; // 인증 성공
        }
        return false; // 인증 실패
    }
}
