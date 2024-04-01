package com.example.am_server.repository;

import com.example.am_server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public static User findbyemail(String email) {
        return null;
    }
}
