# buildServerForTestingAndCodingExercise

Ansible script and supporting files to build (and destroy) servers for WorkAndPlay's "Write Code to Satisfy Tests" exercise at https://github.com/workroomprds/handsonlab/blob/master/write%20code%20to%20satisfy%20tests.md

## You'll need:
* A local install of Ansible
* A DigitalOcean account
* An API key for your DO account
* A file `/vars/sensitive.yml` containing the DO API key in a field called do_token
* An SSH key, which you have stored on your local machine and have added to your DO account
* A file `/vars/sshInfo.yml`containing the SSH key name in do_ssh_key_name and the local path in local_private_ssh_key
* A file `droplets.yml` containing an array of droplet names
* Changes to the Ansible hosts file and the ansible.cfg file to make them match what you have
* Ansible on a DO server referred to in the hosts file.

(and perhaps more...)

(to do: add links to the sources I used to get familiar with DigitalOcean, their API and their tokens, and how to set up and add a new SSH key)

## You'll do
`ansible-playbook makeDroplets.yml` to build the server(s).

You may need to run it more than once – if DO's API/DNS/back end is being flaky, or if the server takes a while to arrive, this script will fail. Ansible tries to be idempotent; running the script a second time will pick up the resources it make the first time, and carry on from there.

`ansible-playbook destroyDroplets.yml` to destroy the servers once built.
