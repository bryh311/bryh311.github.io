## Projects
Here are a list of my projects, I don't have many to show right now, and most of them are class projects, but I will continue to update 
this list with projects that I have worked on.

### Reinforcement learning for 2 Phase Commit - Python, TensorFlow, Z3
This project was done for my distributed systems class. I worked on this project with David Helsel (who doesn't have his own website 
currently). We recreated the results of the  paper: [Learning Distributed Protocols with Zero Knowledge](https://mlforsystems.org/assets/papers/neurips2023/paper9.pdf). The github repo is private but can be provided on request. This project involved building a model in tensorflow and using tf-agents to write an agent utilizing Deep Q-Learning to learn the stages of the 2 phase commit protocol. We formalized 2 Phase Commit as statements in predicate logic in Z3 and tested the model against that to ensure
correctness.

### CS 505 Paxos Project - Java
Implementation of Paxos in the dslabs distributed system simulator. The github repo is private and can be provided on request.

### CS 502 Compiler Project - C++, LLVM
This project involved implementing middle end and back end compiler optimizations passes in the University Simple C Compiler.
Github repo can be provided on request. 

I implemented
- IR generation
- Loop peeling
- Natural loop detection
- Live variable analysis (to check for dead variables)
- Reaching definition analysis (to check for unused variables)
- SSA generation
- Branch folding
- Dead block removal
- Loop invariant code motion (LICM)
- Register Allocation

### Wire Minnow - C
This project inolved implementing a clone of wireshark that ran in the terminal.
Github repo: <https://github.com/bryh311/cs422/>

I implemented parsing for the following
- PCAP packets
- Ethernet frame header
- IP header
- TCP packets
- UDP packets
- ARP packets
- IMCP packets
- DHCP packets

### Unix Shell - C++, Lex, Yacc
Implemenation of a Unix Shell similar in syntax to CSH. Github repo provided on request (repo contains all of my code for my systems
programming class, including a http server (with support for CGI!) and malloc implementation)

The shell has the following features
- subshells
- piping
- output redirection
- control flow (if/else/while/for)