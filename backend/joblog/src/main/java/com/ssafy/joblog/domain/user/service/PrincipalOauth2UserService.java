package com.ssafy.joblog.domain.user.service;


import com.ssafy.joblog.domain.user.config.PrincipalDetails;
import com.ssafy.joblog.domain.user.entity.User;
import com.ssafy.joblog.domain.user.entity.UserRole;
import com.ssafy.joblog.domain.user.oauth.provider.GoogleUserInfo;
import com.ssafy.joblog.domain.user.oauth.provider.KakaoUserInfo;
import com.ssafy.joblog.domain.user.oauth.provider.NaverUserInfo;
import com.ssafy.joblog.domain.user.oauth.provider.OAuth2UserInfo;
import com.ssafy.joblog.domain.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuth2UserInfo oAuth2UserInfo = null;
        if (userRequest.getClientRegistration().getRegistrationId().equals("google")) {
            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        } else if (userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
            oAuth2UserInfo = new NaverUserInfo((Map) oAuth2User.getAttributes().get("response"));
        } else if (userRequest.getClientRegistration().getRegistrationId().equals("kakao")) {
            oAuth2UserInfo = new KakaoUserInfo(oAuth2User.getAttributes());
        } else {
        }

        String provider = oAuth2UserInfo.getProvider();
        String providerId = oAuth2UserInfo.getProviderId();
        String username = provider + "_" + providerId;
        String email = oAuth2UserInfo.getEmail();
        UserRole role = UserRole.valueOf("ROLE_APPLICANT");

        User user = userRepository.findByUsername(username);
        if (user == null) {
            user = User.builder().username(username).email(email).role(role).provider(provider).providerId(providerId).build();
            userRepository.save(user);
        }
        return (OAuth2User) new PrincipalDetails(user, oAuth2User.getAttributes());
    }

}
