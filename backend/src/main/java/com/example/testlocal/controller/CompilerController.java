package com.example.testlocal.controller;

import com.example.testlocal.config.Constants;
import com.example.testlocal.service.CompilerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@CrossOrigin(origins = Constants.URL , allowCredentials = "true")

public class CompilerController {

   private final CompilerService compilerService;

    @PostMapping("/compiler/c")
    public String compileInC(@RequestBody Map<String, String> map){
//        return compilerService.sendGcc(map.get("code"));
        return "hello";
    }


}