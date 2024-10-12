package com.coschool.enums;
import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {

    ROLE_ELEVE,
    ROLE_ADMIN,
    ROLE_PARENT,
    ROLE_PROF;

    @Override
    public String getAuthority() {
        return name();
    }
}