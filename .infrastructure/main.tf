terraform {
  cloud {
    organization = "angelorampersad"

    workspaces {
      name = "bumblebee"
    }
  }
}

resource "null_resource" "default" {
  provisioner "local-exec" {
    command = "echo 'Hello World'"
  }
}