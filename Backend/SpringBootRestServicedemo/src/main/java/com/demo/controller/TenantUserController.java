package com.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.TenantUser;
import com.demo.service.TenantUserService;

@RestController
@RequestMapping("/api/tenant-users")
@CrossOrigin(origins = "http://localhost:3000")
public class TenantUserController {

    @Autowired
    private TenantUserService tenantUserService;

    @PostMapping("/addtenantuser")
    public TenantUser createTenantUser(@RequestBody TenantUser tenantUser) {
//    	TenantUser tenantUser = new TenantUser();
//        tenantUser.setTenantUserName(tenantUserForm.getTenantUserName());
//        tenantUser.setTenantUserUsername(tenantUserForm.getTenantUserUsername());
//        tenantUser.setTenantUserPassword(tenantUserForm.getTenantUserPassword());
//        tenantUser.setTenantUserContact(tenantUserForm.getTenantUserContact());
//        tenantUser.setTenantUserMail(tenantUserForm.getTenantUserMail());
    	System.out.println("/n/n/n"+tenantUser+"/n/n/n");
        return tenantUserService.saveTenantUser(tenantUser);
    }

    @GetMapping("/{id}")
    public TenantUser getTenantUser(@PathVariable int id) {
        return tenantUserService.getTenantUserById(id);
    }

    @GetMapping
    public List<TenantUser> getAllTenantUsers() {
        return tenantUserService.getAllTenantUsers();
    }

    @DeleteMapping("/{id}")
    public void deleteTenantUser(@PathVariable int id) {
        tenantUserService.deleteTenantUser(id);
    }
}

