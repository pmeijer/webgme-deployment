Setup instructions on AWS EC2 machines
======================================

   * Allocate new EC2 instance (e.g. t1.medium) with a Ubuntu 64-bit image
   * Associate public IP and set firewall rules (Security Group) for service ports
   * Log-in via SSH and
      * Run 'sudo apt-get -y update && sudo apt-get upgrade'
      * Tweak /etc/hostname (reflect your choice of DNS name)
      * Tweak .ssh/authorized_keys
      * Run 'sudo apt-get -y install git curl mongodb'
      * Run 'curl -sL https://deb.nodesource.com/setup | sudo bash -'
      * Run 'sudo  apt-get install -y nodejs'
    * Clone the webgme-deployment project to the home folder (or whatever)
      *  git clone https://github.com/webgme/webgme-deployment.git
