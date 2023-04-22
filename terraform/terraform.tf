terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}
variable "branch" {}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_droplet" "web" {
  image      = "almalinux-9-x64"
  name       = "personal-site"
  region     = "tor1"
  size       = "s-1vcpu-1gb"
  monitoring = true
  user_data  = templatefile("${path.module}/user-data.sh.tftpl", { branch = "${var.branch}" })
}
