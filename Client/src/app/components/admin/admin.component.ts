import { Component, OnInit } from "@angular/core";
import { AdminServiceService } from "./../../services/admin-service.service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  profiles
  constructor(private admin: AdminServiceService) {}

  getProfiles(){
    this.admin.getAllProfile().subscribe(data=>{
      
      this.profiles = data.data
    })
  }

  deleteUserProfile(id){
    this.admin.deleteById(id).subscribe(data=>{
      console.log(data)
      this.getProfiles()
    })
  }

  ngOnInit() {
    this.getProfiles()
  }
}
