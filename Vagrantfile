Vagrant.require_version ">= 1.5"

Vagrant.configure("2") do |config|

    # configure virtualbox instance
    config.vm.provider :virtualbox do |v|
        v.name = "playground"
        v.customize [
            "modifyvm", :id,
            "--name", "playground",
            "--memory", 512,
            "--natdnshostresolver1", "on",
            "--cpus", 1,
        ]
    end

    # base the box on ubuntu
    config.vm.box = "ubuntu/trusty64"

    # configure network
    config.vm.network :private_network, ip: "192.168.33.99"
    config.ssh.forward_agent = true

    # provisioning
    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "ansible/playbook.yml"
    end

    # sync dir
    config.vm.synced_folder "./", "/var/www/playground.dev", type: "nfs"
end
