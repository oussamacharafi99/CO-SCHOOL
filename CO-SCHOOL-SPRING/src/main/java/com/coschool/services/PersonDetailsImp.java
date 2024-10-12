package com.coschool.services;
import com.coschool.models.Person;
import com.coschool.repositories.PersonRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class PersonDetailsImp implements UserDetailsService {

    private final PersonRepo personRepository;

    public PersonDetailsImp(PersonRepo personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Person person = personRepository.findByUsername(username);
        if (person == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        return person;
    }
}
