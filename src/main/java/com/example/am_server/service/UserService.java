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
}
