// Quiz data
const quizQuestions = [
    {
        question: "Which of the following would most likely affect design considerations when building out an IDF?",
        options: [
            "The source panel amperage",
            "The fire suppression system",
            "The humidity levels",
            "The cable transmission speeds"
        ],
        correctAnswer: 1
    },
    {
        question: "During an incident, an analyst sends reports regularly to the investigation and leadership teams. Which of the following best describes how PII should be safeguarded during an incident?",
        options: [
            "Implement data encryption and store the data so only the company has access.",
            "Ensure permissions are limited to the investigation team and encrypt the data.",
            "Implement data encryption and create a standardized procedure for deleting data that is no longer needed.",
            "Ensure the permissions are open only to the company."
        ],
        correctAnswer: 2
    },
    {
        question: "A network technician is troubleshooting a port channel issue. When logging in to one of the switches, the technician sees the following information: 'Native VLAN mismatch detected on interface g0/1'. Which of the following layers of the OSI model is most likely to be where the issue resides?",
        options: [
            "Layer 2",
            "Layer 3",
            "Layer 5",
            "Layer 6"
        ],
        correctAnswer: 0
    },
    {
        question: "A company's publicly accessible servers are connected to a switch between the company's ISP-connected router and the firewall in front of the company network. The firewall is stateful, and the router is running an ACL. Which of the following best describes the area between the router and the firewall?",
        options: [
            "Untrusted zone",
            "Screened subnet",
            "Trusted zone",
            "Private VLAN"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following protocols can be routed?",
        options: [
            "FCoE",
            "Fibre Channel",
            "iSCSI",
            "NetBEUI"
        ],
        correctAnswer: 2
    },
    {
        question: "A Chief Information Officer wants to monitor network breaching in a passive, controlled manner. Which of the following would be best to implement?",
        options: [
            "Honeypot",
            "Perimeter network",
            "Intrusion prevention system",
            "Port security"
        ],
        correctAnswer: 0
    },
    {
        question: "A network is experiencing extreme latency when accessing a particular website. Which of the following commands will BEST help identify the issue?",
        options: [
            "ipconfig",
            "netstat",
            "tracert",
            "ping"
        ],
        correctAnswer: 2
    },
    {
        question: "A company is moving to a new building designed with a guest waiting area that has existing network ports. Which of the following practices would BEST secure the network?",
        options: [
            "Ensure all guests sign an NDA.",
            "Disable unneeded switchports in the area.",
            "Lower the radio strength to reduce Wi-Fi coverage in the waiting area.",
            "Enable MAC filtering to block unknown hardware addresses."
        ],
        correctAnswer: 1
    },
    {
        question: "A user is required to log in to a main web application, which then grants the user access to all other programs needed to complete job-related tasks. Which of the following authentication methods does this setup describe?",
        options: [
            "SSO",
            "RADIUS",
            "TACACS+",
            "Multifactor authentication",
            "802.1X"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following IP packet header fields is the mechanism for ending loops at Layer 3?",
        options: [
            "Checksum",
            "Type",
            "Time-to-live",
            "Protocol"
        ],
        correctAnswer: 2
    },
    {
        question: "During the troubleshooting of an E1 line, the point-to-point link on the core router was accidentally unplugged and left unconnected for several hours. However, the network management team was not notified. Which of the following could have been configured to allow early detection and possible resolution of the issue?",
        options: [
            "Traps",
            "MIB",
            "OID",
            "Baselines"
        ],
        correctAnswer: 0
    },
    {
        question: "A network administrator is trying to create a subnet, which is the most efficient size possible, for 31 laptops. Which of the following network subnets would be best in this situation?",
        options: [
            "10.10.10.0/24",
            "10.10.10.0/25",
            "10.10.10.0/26",
            "10.10.10.0/27"
        ],
        correctAnswer: 3
    },
    {
        question: "A customer is adding fiber connectivity between adjacent buildings. A technician terminates the multimode cable to the fiber patch panel. After connecting the fiber patch cable, the indicator light does not come on. Which of the following should a technician try first to troubleshoot this issue?",
        options: [
            "Reverse the fibers.",
            "Reterminate the fibers.",
            "Verify the fiber size.",
            "Examine the cable runs for visual faults."
        ],
        correctAnswer: 0
    },
    {
        question: "A network technician is troubleshooting a specific port on a switch. Which of the following commands should the technician use to see the port configuration?",
        options: [
            "show route",
            "show interface",
            "show arp",
            "show port"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following protocols is widely used in large-scale enterprise networks to support complex networks with multiple routers and balance traffic load on multiple links?",
        options: [
            "OSPF",
            "RIPv2",
            "QoS",
            "STP"
        ],
        correctAnswer: 0
    },
    {
        question: "A technician is troubleshooting network connectivity from a wall jack. Readings from a multimeter indicate extremely low ohmic values instead of the rated impedance from the switchport. Which of the following is the MOST likely cause of this issue?",
        options: [
            "Incorrect transceivers",
            "Faulty LED",
            "Short circuit",
            "Upgraded OS version on switch"
        ],
        correctAnswer: 2
    },
    {
        question: "A large number of PCs are obtaining an APIPA IP address, and a number of new computers were added to the network. Which of the following is MOST likely causing the PCs to obtain an APIPA address?",
        options: [
            "Rogue DHCP server",
            "Network collision",
            "Incorrect DNS settings",
            "DHCP scope exhaustion"
        ],
        correctAnswer: 3
    },
    {
        question: "Users are reporting performance issues when attempting to access the main fileshare server. Which of the following steps should a network administrator perform next based on the network troubleshooting methodology?",
        options: [
            "Implement a fix to resolve the connectivity issues.",
            "Determine if anything has changed.",
            "Establish a theory of probable cause.",
            "Document all findings, actions, and lessons learned."
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following, in addition to a password, can be asked of a user for MFA?",
        options: [
            "PIN",
            "Favorite color",
            "Hard token",
            "Mother's maiden name"
        ],
        correctAnswer: 0
    },
    {
        question: "A network technician wants to find the shortest path from one node to every other node in the network. Which of the following algorithms will provide the FASTEST convergence time?",
        options: [
            "A static algorithm",
            "A link-state algorithm",
            "A distance-vector algorithm",
            "A path-vector algorithm"
        ],
        correctAnswer: 1
    },
    {
        question: "A customer is hosting an internal database server. None of the users are able to connect to the server, even though it appears to be working properly. Which of the following is the best way to verify traffic to and from the server?",
        options: [
            "Protocol analyzer",
            "nmap",
            "ipconfig",
            "Speed test"
        ],
        correctAnswer: 0
    },
    {
        question: "A network technician needs to ensure that all files on a company's network can be moved in a safe and protected manner without interception from someone who is not the intended recipient. Which of the following would allow the network technician to meet these requirements?",
        options: [
            "FTP",
            "TFTP",
            "SMTP",
            "SFTP"
        ],
        correctAnswer: 3
    },
    {
        question: "A network architect is developing documentation for an upcoming IPv4/IPv6 dual‐stack implementation. The architect wants to shorten the following IPv6 address: ef82:0000:00O0:000O:0O00:1ab1:1234:1bc2. Which of the following is the MOST appropriate shortened version?",
        options: [
            "ef82:0:lab1:1234:1bc2",
            "ef82:0:;1ab1:1234:1bc2",
            "ef82:0:0:0:0:1ab1:1234:1bc2",
            "ef82::1ab1:1234:1bc2"
        ],
        correctAnswer: 3
    },
    {
        question: "A company is reviewing ways to cut the overall cost of its IT budget. A network technician suggests removing various computer programs from the IT budget and only providing these programs on an as‐needed basis. Which of the following models would meet this requirement?",
        options: [
            "Multitenancy",
            "IaaS",
            "SaaS",
            "VPN"
        ],
        correctAnswer: 2
    },
    {
        question: "A company is opening a new building on the other side of its campus. The distance from the closest building to the new building is 1,804ft (550m). The company needs to connect the networking equipment in the new building to the other buildings on the campus without using a repeater. Which of the following transceivers should the company use?",
        options: [
            "10GBASE-SW",
            "10GBASE-LR",
            "10GBASE-LX4 over multimode fiber",
            "10GBASE-SR"
        ],
        correctAnswer: 1
    },
    {
        question: "The Chief Executive Officer of a company wants to ensure business operations are not disrupted in the event of a disaster. The solution must have fully redundant equipment, real‐time synchronization, and zero data loss. Which of the following should be prepared?",
        options: [
            "Cloud site",
            "Warm site",
            "Hot site",
            "Cold site"
        ],
        correctAnswer: 2
    },
    {
        question: "In which of the following components do routing protocols belong in a software‐defined network?",
        options: [
            "Infrastructure layer",
            "Control layer",
            "Application layer",
            "Management plane"
        ],
        correctAnswer: 1
    },
    {
        question: "A network engineer designed and implemented a new office space with the following characteristics: one month after implementation, users began reporting dropped signals when entering another room and overall poor connections to the 5GHz network. Which of the following should the engineer do to best resolve the issue?",
        options: [
            "Use non‐overlapping channels",
            "Reconfigure the network to support 2.4GHz",
            "Upgrade to WPA3",
            "Change to directional antennas"
        ],
        correctAnswer: 3
    },
    {
        question: "A network administrator needs to monitor traffic on a specific port on a switch. Which of the following should the administrator configure to accomplish the task?",
        options: [
            "Port security",
            "Port tagging",
            "Port mirroring",
            "Media access control"
        ],
        correctAnswer: 2
    },
    {
        question: "A technician is investigating why a PC cannot reach a file server with the IP address 192.168.8.129. Given the network configuration, which of the following configurations on the PC is incorrect?",
        options: [
            "Subnet mask",
            "IPv4 address",
            "Default gateway",
            "IPv6 address"
        ],
        correctAnswer: 2
    },
    {
        question: "A network technician has determined the cause of a network disruption. Which of the following is the NEXT step for the technician to perform?",
        options: [
            "Validate the findings in a top‐to‐bottom approach",
            "Duplicate the issue, if possible",
            "Establish a plan of action to resolve the issue",
            "Document the findings and actions"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is the most secure connection used to inspect and provide controlled internet access when remote employees are connected to the corporate network?",
        options: [
            "Site-to-site VPN",
            "Full-tunnel VPN",
            "Split-tunnel VPN",
            "SSH"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following architectures is used for FTP?",
        options: [
            "Client-server",
            "Service-oriented",
            "Connection-oriented",
            "Data-centric"
        ],
        correctAnswer: 0
    },
    {
        question: "A network administrator is concerned about a rainbow table being used to help access network resources. Which of the following must be addressed to reduce the likelihood of a rainbow table being effective?",
        options: [
            "Password policy",
            "Remote access policy",
            "Acceptable use policy",
            "Data loss prevention policy"
        ],
        correctAnswer: 0
    },
    {
        question: "A technician completed troubleshooting and was able to fix an issue. Which of the following is the BEST method the technician can use to pass along the exact steps other technicians should follow in case the issue arises again?",
        options: [
            "Use change management to build a database",
            "Send an email stating that the issue is resolved.",
            "Document the lessons learned",
            "Close the ticket and inform the users."
        ],
        correctAnswer: 2
    },
    {
        question: "A network resource was accessed by an outsider as a result of a successful phishing campaign. Which of the following strategies should be employed to mitigate the effects of phishing?",
        options: [
            "Multifactor authentication",
            "Single sign-on",
            "RADIUS",
            "VPN"
        ],
        correctAnswer: 0
    },
    {
        question: "A company's web server is hosted at a local ISP. This is an example of:",
        options: [
            "Allocation",
            "An on-premises data center",
            "A branch office",
            "A cloud provider"
        ],
        correctAnswer: 3
    },
    {
        question: "A technician is deploying a new SSID for an industrial control system. The control devices require the network to use encryption that employs TKIP and a symmetrical password to connect. Which of the following should the technician configure to ensure compatibility with the control devices?",
        options: [
            "WPA2-Enterprise",
            "WPA-Enterprise",
            "WPA-PSK",
            "WPA2-PSK"
        ],
        correctAnswer: 2
    },
    {
        question: "A network technician receives a support ticket concerning multiple users who are unable to access the company's shared drive. The switch interface that the shared drive is connected to is displaying an error. Which of the following is MOST likely the issue?",
        options: [
            "The switchport is shut down",
            "The cable is not plugged in.",
            "The loopback is not set",
            "The bandwidth configuration is incorrect."
        ],
        correctAnswer: 0
    },
    {
        question: "A network engineer needs to change an entire subnet of SLAAC-configured workstation addresses. Which of the following methods would be the best for the engineer to use?",
        options: [
            "Change the address prefix in ARP so that the workstations retrieve their new addresses.",
            "Change the address prefix in a router so that the router advertises the new prefix with Neighbor Discovery.",
            "Change the address prefix scope in a DHCP server so that the workstations retrieve their new addresses.",
            "Change the workstations' address prefix manually because an automated method does not exist."
        ],
        correctAnswer: 1
    },
    {
        question: "To access production applications and data, developers must first connect remotely to a different server. From there, they are able to access production data. Which of the following does this BEST represent?",
        options: [
            "A management plane",
            "A proxy server",
            "An out-of-band management device",
            "A site-to-site VPN",
            "A jump box"
        ],
        correctAnswer: 4
    },
    {
        question: "A security engineer is trying to determine whether an internal server was accessed by hosts on the internet. The internal server was shut down during the investigation. Which of the following will the engineer review to determine whether the internal server had an unauthorized access attempt?",
        options: [
            "The server's syslog",
            "The NetFlow statistics",
            "The firewall logs",
            "The audit logs on the core switch"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following should a network administrator configure when adding OT devices to an organization's architecture?",
        options: [
            "Honeynet",
            "Data-at-rest encryption",
            "Time-based authentication",
            "Network segmentation"
        ],
        correctAnswer: 3
    },
    {
        question: "Which of the following documents dictates the uptimes that were agreed upon by the involved parties?",
        options: [
            "MOU",
            "BYOD",
            "SLA",
            "NDA"
        ],
        correctAnswer: 2
    },
    {
        question: "During a risk assessment, which of the following should be considered when planning to mitigate high CPU utilization of a firewall?",
        options: [
            "Recovery time objective",
            "Uninterruptible power supply",
            "NIC teaming",
            "Load balancing"
        ],
        correctAnswer: 3
    },
    {
        question: "A company is designing a SAN and would like to use STP as its medium for communication. Which of the following protocols would BEST suit the company's needs?",
        options: [
            "SFTP",
            "Fibre Channel",
            "iSCSI",
            "FTP"
        ],
        correctAnswer: 1
    },
    {
        question: "A Chief Executive Officer and a network administrator came to an agreement with a vendor to purchase new equipment for the data center. A document was drafted so that all parties would be informed about the scope of the project before it started. Which of the following terms BEST describes the document used?",
        options: [
            "Contract",
            "Project charter",
            "Memorandum of understanding",
            "Non-disclosure agreement"
        ],
        correctAnswer: 1
    },
    {
        question: "Network connectivity in an extensive forest reserve was achieved using fiber optics. A network fault was detected, and the repair team needs to check the integrity of the fiber cable. Which of the following actions can reduce repair time?",
        options: [
            "Using a tone generator and wire map to determine the fault location",
            "Using a multimeter to locate the fault point",
            "Using an OTDR in one end of the optic cable to get the length information",
            "Using a spectrum analyzer and comparing the current wavelength with a working baseline"
        ],
        correctAnswer: 2
    },
    {
        question: "A network technician is attempting to increase throughput by configuring link port aggregation between a Gigabit Ethernet distribution switch and a Fast Ethernet access switch. Which of the following is the BEST choice concerning speed and duplex for all interfaces that are participating in the link aggregation?",
        options: [
            "Half duplex and 1GB speed",
            "Full duplex and 1GB speed",
            "Half duplex and 10OMB speed",
            "Full duplex and 100MB speed"
        ],
        correctAnswer: 1
    },
    {
        question: "To reduce costs and increase mobility, a Chief Technology Officer (CTO) wants to adopt cloud services for the organization and its affiliates. To reduce the impact for users, the CTO wants key services to run from the on-site data center and enterprise services to run in the cloud. Which of the following deployment models is the best choice for the organization?",
        options: [
            "Public",
            "Hybrid",
            "SaaS",
            "Private"
        ],
        correctAnswer: 1
    },
    {
        question: "26. Users in a branch can access an in‑house database server, but it takes too long to fetch records. The analyst is unsure if network latency is the cause.",
        options: [
            "SNMP",
            "Link state",
            "Syslog",
            "QoS",
            "Traffic shaping"
        ],
        correctAnswer: 0
    },
    {
        question: "27. A customer reports no resource access after replacing switches. On site, the technician finds redundant links between two switches. Which is the most likely cause?",
        options: [
            "The ARP cache is corrupt",
            "CSMA/CD protocols have failed",
            "STP is not configured",
            "The switches are incompatible models"
        ],
        correctAnswer: 2
    },
    {
        question: "28. Users report performance issues when accessing the main fileshare server. According to troubleshooting methodology, what is the next step?",
        options: [
            "Implement a fix immediately",
            "Determine if anything has changed",
            "Establish a theory of probable cause",
            "Document all findings and actions"
        ],
        correctAnswer: 1
    },
    {
        question: "29. Which of the following, in addition to a password, can be requested for multi‑factor authentication (MFA)?",
        options: [
            "PIN",
            "Favorite color",
            "Hard token",
            "Mother's maiden name"
        ],
        correctAnswer: 0
    },
    {
        question: "30. To find the shortest path from one node to every other node quickly, which routing algorithm provides the fastest convergence time?",
        options: [
            "A static algorithm",
            "A link‑state algorithm",
            "A distance‑vector algorithm",
            "A path‑vector algorithm"
        ],
        correctAnswer: 1
    },
    {
        question: "31. A customer is hosting an internal database server but no one can connect to it. What is the best way to verify traffic to and from the server?",
        options: [
            "Protocol analyzer",
            "nmap",
            "ipconfig",
            "Speed test"
        ],
        correctAnswer: 0
    },
    {
        question: "32. To safely move all files on a company network without interception, which method should be used?",
        options: [
            "FTP",
            "TFTP",
            "SMTP",
            "SFTP"
        ],
        correctAnswer: 3
    },
    {
        question: "33. An architect needs to shorten the IPv6 address 'ef82:0000:00O0:000O:0O00:1ab1:1234:1bc2.' Which is the most appropriate shortened version?",
        options: [
            "ef82:0:lab1:1234:1bc2",
            "ef82:0:;1ab1:1234:1bc2",
            "ef82:0:0:0:0:1ab1:1234:1bc2",
            "ef82::1ab1:1234:1bc2"
        ],
        correctAnswer: 3
    },
    {
        question: "34. To cut overall IT budget costs by providing programs only as needed, which service model meets this requirement?",
        options: [
            "Multitenancy",
            "IaaS",
            "SaaS",
            "VPN"
        ],
        correctAnswer: 2
    },
    {
        question: "35. A company must connect a new building (1,804 ft away) without using a repeater. Which transceiver should be used?",
        options: [
            "10GBASE-SW",
            "10GBASE-LR",
            "10GBASE-LX4 over multimode fiber",
            "10GBASE-SR"
        ],
        correctAnswer: 1
    },
    {
        question: "36. For disaster recovery, the CEO requires fully redundant equipment with real‑time synchronization and zero data loss. What should be prepared?",
        options: [
            "Cloud site",
            "Warm site",
            "Hot site",
            "Cold site"
        ],
        correctAnswer: 2
    },
    {
        question: "37. In a software‑defined network, in which component do routing protocols reside?",
        options: [
            "Infrastructure layer",
            "Control layer",
            "Application layer",
            "Management plane"
        ],
        correctAnswer: 1
    },
    {
        question: "38. One month after a new office space implementation, users report dropped signals and poor 5GHz connectivity. What is the best resolution?",
        options: [
            "Use non‑overlapping channels",
            "Reconfigure to support 2.4GHz",
            "Upgrade to WPA3",
            "Change to directional antennas"
        ],
        correctAnswer: 3
    },
    {
        question: "39. What is the IEEE link cost for a Fast Ethernet interface in STP calculations?",
        options: [
            "2",
            "4",
            "19",
            "100"
        ],
        correctAnswer: 3
    },
    {
        question: "40. To monitor traffic on a specific switch port, which configuration should be used?",
        options: [
            "Port security",
            "Port tagging",
            "Port mirroring",
            "Media access control"
        ],
        correctAnswer: 2
    },
    {
        question: "41. A technician finds that a PC cannot reach the file server at 192.168.8.129. Which PC configuration is most likely incorrect?",
        options: [
            "Subnet mask",
            "IPv4 address",
            "Default gateway",
            "IPv6 address"
        ],
        correctAnswer: 2
    },
    {
        question: "42. After determining the cause of a network disruption, what is the NEXT step for the technician?",
        options: [
            "Validate findings in a top‑to‑bottom approach",
            "Duplicate the issue, if possible",
            "Establish a plan of action to resolve the issue",
            "Document the findings and actions"
        ],
        correctAnswer: 2
    },
    {
        question: "43. Which connection method is most secure for inspecting and controlling internet access for remote employees?",
        options: [
            "Site‑to‑site VPN",
            "Full‑tunnel VPN",
            "Split‑tunnel VPN",
            "SSH"
        ],
        correctAnswer: 1
    },
    {
        question: "44. Which architecture does FTP use?",
        options: [
            "Client‑server",
            "Service‑oriented",
            "Connection‑oriented",
            "Data‑centric"
        ],
        correctAnswer: 0
    },
    {
        question: "45. To reduce the effectiveness of a rainbow table attack, which aspect must be addressed?",
        options: [
            "Password policy",
            "Remote access policy",
            "Acceptable use policy",
            "Data loss prevention policy"
        ],
        correctAnswer: 0
    },
    {
        question: "46. Which method is best for passing along troubleshooting steps for a fixed issue?",
        options: [
            "Use change management to build a database",
            "Send an email stating resolution",
            "Document the lessons learned",
            "Close the ticket and inform users"
        ],
        correctAnswer: 2
    },
    {
        question: "47. After a successful phishing attack, which strategy best mitigates its effects?",
        options: [
            "Multifactor authentication",
            "Single sign‑on",
            "RADIUS",
            "VPN"
        ],
        correctAnswer: 0
    },
    {
        question: "48. A company’s web server is hosted at a local ISP. This is an example of:",
        options: [
            "Allocation",
            "On‑premises data center",
            "Branch office",
            "Cloud provider"
        ],
        correctAnswer: 3
    },
    {
        question: "49. For an industrial control system requiring TKIP encryption with a symmetrical password, which wireless configuration should be used?",
        options: [
            "WPA2‑Enterprise",
            "WPA‑Enterprise",
            "WPA‑PSK",
            "WPA2‑PSK"
        ],
        correctAnswer: 2
    },
    {
        question: "50. A support ticket shows that users cannot access the shared drive because the switch interface displays an error. What is most likely wrong?",
        options: [
            "The switchport is shut down",
            "The cable is not plugged in",
            "The loopback is not set",
            "The bandwidth configuration is incorrect"
        ],
        correctAnswer: 0
    },
    {
        question: "51. A network engineer needs to change an entire subnet of SLAAC‑configured workstation addresses. Which method is best?",
        options: [
            "Change the address prefix in ARP so that the workstations retrieve their new addresses",
            "Change the address prefix in a router so that the router advertises the new prefix with Neighbor Discovery",
            "Change the address prefix scope in a DHCP server so that the workstations retrieve their new addresses",
            "Manually change each workstation’s address prefix"
        ],
        correctAnswer: 1
    },
    {
        question: "52. Developers must connect remotely to another server to access production applications. What does this setup BEST represent?",
        options: [
            "A management plane",
            "A proxy server",
            "An out‑of‑band management device",
            "A site‑to‑site VPN",
            "A jump box"
        ],
        correctAnswer: 4
    },
    {
        question: "53. To determine if an internal server was accessed by external hosts, which log should be reviewed?",
        options: [
            "The server's syslog",
            "NetFlow statistics",
            "The firewall logs",
            "The audit logs on the core switch"
        ],
        correctAnswer: 0
    },
    {
        question: "54. When troubleshooting intermittent Wi‑Fi in parts of a building, what should be checked first? (Select TWO)",
        options: [
            "Site survey",
            "EIRP",
            "AP placement",
            "Captive portal",
            "SSID assignment",
            "AP association time"
        ],
        correctAnswer: [0, 2]
    },
    {
        question: "55. When adding OT devices to an organization’s architecture, which configuration is recommended?",
        options: [
            "Honeynet",
            "Data‑at‑rest encryption",
            "Time‑based authentication",
            "Network segmentation"
        ],
        correctAnswer: 3
    },
    {
        question: "56. During a risk assessment for mitigating high CPU utilization on a firewall, which factor should be considered?",
        options: [
            "Recovery time objective",
            "Uninterruptible power supply",
            "NIC teaming",
            "Load balancing"
        ],
        correctAnswer: 3
    },
    {
        question: "57. For a SAN design that uses a specific medium for communication, which protocol best suits the company’s needs?",
        options: [
            "SFTP",
            "Fibre Channel",
            "iSCSI",
            "FTP"
        ],
        correctAnswer: 1
    },
    {
        question: "58. A CEO and network administrator agreed with a vendor on new data center equipment. Which document best describes the scope before work begins?",
        options: [
            "Contract",
            "Project charter",
            "Memorandum of understanding",
            "Non‑disclosure agreement"
        ],
        correctAnswer: 1
    },
    {
        question: "59. In a forest reserve network using fiber optics, which action will reduce repair time when checking cable integrity?",
        options: [
            "Use a tone generator and wire map to determine the fault location",
            "Use a multimeter to locate the fault point",
            "Use an OTDR on one end of the cable to get the length information",
            "Use a spectrum analyzer and compare the current wavelength with a working baseline"
        ],
        correctAnswer: 2
    },
    {
        question: "60. Which issues are associated with RIPv2? (Select TWO)",
        options: [
            "Route poisoning",
            "Time to converge",
            "Scalability",
            "Unicast",
            "Adjacent neighbors",
            "Maximum transmission unit"
        ],
        correctAnswer: [1, 2]
    },
    {
        question: "61. For link port aggregation between a Gigabit distribution switch and a Fast Ethernet access switch, what is the best interface setting?",
        options: [
            "Half duplex and 1GB speed",
            "Full duplex and 1GB speed",
            "Half duplex and 10OMB speed",
            "Full duplex and 100MB speed"
        ],
        correctAnswer: 1
    },
    {
        question: "62. A laptop taken on a trip now accesses internet sites but not corporate intranet sites. What is the most likely cause?",
        options: [
            "Duplicate IP address",
            "Duplicate SSID",
            "Incorrect DNS",
            "Incorrect subnet mask"
        ],
        correctAnswer: 2
    },
    {
        question: "63. After installing 35 additional workstations, some original workstations (previously offline) now cannot access network resources. What is most likely the cause?",
        options: [
            "Incorrect VLAN setting",
            "Insufficient DHCP scope",
            "Improper NIC setting",
            "Duplicate IP address"
        ],
        correctAnswer: 1
    },
    {
        question: "64. To reduce costs and increase mobility, a CTO wants key services on‑site and enterprise services in the cloud. Which deployment model is best?",
        options: [
            "Public",
            "Hybrid",
            "SaaS",
            "Private"
        ],
        correctAnswer: 1
    },
    {
        question: "65. Due to non‑uniform and overly permissive access permissions, security incidents are rising. What is the best method to improve security?",
        options: [
            "Change default permissions to implicit deny",
            "Configure uniform ACLs for employees and NAC for contractors",
            "Deploy an RDP server for centralized access",
            "Implement role‑based access control"
        ],
        correctAnswer: 3
    },
    {
        question: "66. To view the certificate exchange between a server and a client, which tool should a network engineer use?",
        options: [
            "dig",
            "tcpdump",
            "nmap",
            "traceroute"
        ],
        correctAnswer: 1
    },
    {
        question: "67. For a new office with a single public IP, which RFC1918 subnet should be used for the LAN?",
        options: [
            "10.10.10.0/24",
            "127.16.10.0/24",
            "174.16.10.0/24",
            "198.18.10.0/24"
        ],
        correctAnswer: 0
    },
    {
        question: "68. A company’s management requires that core network hardware be repairable in under 60 minutes if a major part fails. Which metric is associated with this requirement?",
        options: [
            "RPO",
            "MTTR",
            "FHRP",
            "MTBF"
        ],
        correctAnswer: 1
    },
    {
        question: "69. When setting up DNS records on local servers for cloud access by hostname, which record type should be used?",
        options: [
            "A",
            "MX",
            "CNAME",
            "NS"
        ],
        correctAnswer: 0
    },
    {
        question: "70. Which port number is used by a secure protocol (HTTPS)?",
        options: [
            "20",
            "23",
            "443",
            "445"
        ],
        correctAnswer: 2
    },
    {
        question: "71. For intermittent Wi‑Fi connectivity, what should be checked first? (Select TWO)",
        options: [
            "Site survey",
            "EIRP",
            "AP placement",
            "Captive portal",
            "SSID assignment",
            "AP association time"
        ],
        correctAnswer: [0, 2]
    },
    {
        question: "72. When all users can access local resources but not external websites—and a ping returns 'TTL expired in transit'—what best explains this result?",
        options: [
            "Incorrect VLAN settings",
            "Upstream routing loop",
            "Network collisions",
            "DNS misconfiguration"
        ],
        correctAnswer: 3
    },
    {
        question: "73. To verify throughput of a new metro Ethernet circuit per the SLA, which tool is best?",
        options: [
            "iPerf",
            "Ping",
            "NetFlow",
            "Netstat"
        ],
        correctAnswer: 0
    },
    {
        question: "74. A technician finds transceivers labeled '8Gbps' in a storage closet. Which protocol uses these transceivers?",
        options: [
            "Coaxial over Ethernet",
            "Internet Small Computer Systems Interface",
            "Fibre Channel",
            "Gigabit interface converter"
        ],
        correctAnswer: 2
    },
    {
        question: "75. When users can access local resources but not external websites and a command output indicates 'TTL expired in transit,' what is the best explanation?",
        options: [
            "Incorrect VLAN settings",
            "Upstream routing loop",
            "Network collisions",
            "DNS misconfiguration"
        ],
        correctAnswer: 3
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const optionsContainer = document.querySelector('.options');
const questionNumberElement = document.getElementById('question-number').querySelector('span');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const percentageElement = document.getElementById('percentage');
const progressBar = document.querySelector('.progress-bar');
const answersReview = document.getElementById('answers-review');
const themeToggle = document.getElementById('theme-toggle');
const homeBtn = document.getElementById('home-btn');
const resultsHomeBtn = document.getElementById('results-home-btn');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedOption = null;

// Initialize the quiz
function initQuiz() {
    // Set up event listeners first
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', handleNextQuestion);
    prevBtn.addEventListener('click', handlePrevQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    themeToggle.addEventListener('click', toggleTheme);
    homeBtn.addEventListener('click', goHome);
    resultsHomeBtn.addEventListener('click', goHome);
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // Check if there's saved quiz progress in localStorage
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        userAnswers = progress.userAnswers || [];
        currentQuestionIndex = progress.currentQuestion || 0;
        
        // If user had answers, start the quiz directly
        if (userAnswers.length > 0) {
            startQuiz();
            return;
        }
    }
    
    // Otherwise, show start screen
    startScreen.classList.remove('hide');
    quizContainer.classList.add('hide');
    resultsScreen.classList.add('hide');
}

// Toggle dark/light theme
function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        themeToggle.textContent = '🌙';
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        themeToggle.textContent = '☀️';
    }
}

// Start the quiz
function startQuiz() {
    startScreen.classList.add('hide');
    quizContainer.classList.remove('hide');
    resultsScreen.classList.add('hide');
    
    // Make sure next button is enabled if current question is already answered
    if (userAnswers[currentQuestionIndex] !== undefined) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    
    // Update progress bar
    const progressPercentage = ((currentQuestionIndex) / (quizQuestions.length - 1)) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Enable/disable previous button based on current question
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Clear options
    optionsContainer.innerHTML = '';
    
    // Populate options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        // Check if this question was previously answered
        if (userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
            selectedOption = optionElement;
            nextBtn.disabled = false;
        }
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Save current progress to localStorage
    saveProgress();
}

// Save quiz progress to localStorage
function saveProgress() {
    const progress = {
        userAnswers: userAnswers,
        currentQuestion: currentQuestionIndex
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

// Select an option
function selectOption(optionElement, index) {
    // Clear previous selection
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    
    // Set new selection
    optionElement.classList.add('selected');
    selectedOption = optionElement;
    userAnswers[currentQuestionIndex] = index;
    
    // Enable next button
    nextBtn.disabled = false;
    
    // Save progress
    saveProgress();
}

// Handle next question
function handleNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        selectedOption = null; // Reset selection state
        loadQuestion();
    } else {
        showResults();
    }
}

// Handle previous question
function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedOption = null; // Reset selection state
        loadQuestion();
    }
}

// Show quiz results
function showResults() {
    quizContainer.classList.add('hide');
    resultsScreen.classList.remove('hide');
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correctAnswer) {
            score++;
        }
    });
    
    // Update result elements
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizQuestions.length;
    const percentage = Math.round((score / quizQuestions.length) * 100);
    percentageElement.textContent = percentage;
    
    // Display review of all questions and answers
    displayReview();
    
    // Clear localStorage when quiz is completed
    localStorage.removeItem('quizProgress');
}

// Display review of all questions with correct and user answers
function displayReview() {
    answersReview.innerHTML = '';
    
    quizQuestions.forEach((question, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('review-question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Question ${qIndex + 1}: ${question.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('review-options');
        
        question.options.forEach((option, oIndex) => {
            const optionElement = document.createElement('div');
            
            // Mark correct and user answers
            if (oIndex === question.correctAnswer) {
                optionElement.classList.add('correct');
                optionElement.textContent = option;
            } else if (userAnswers[qIndex] === oIndex) {
                if (oIndex !== question.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
                optionElement.textContent = option;
            } else {
                optionElement.textContent = option;
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        questionDiv.appendChild(optionsContainer);
        answersReview.appendChild(questionDiv);
    });
}

// Go back to home/welcome screen
function goHome() {
    // Show confirmation dialog
    if (confirm("Return to the home page? Your current progress will be saved.")) {
        // Save current progress
        saveProgress();
        
        // Show start screen, hide others
        startScreen.classList.remove('hide');
        quizContainer.classList.add('hide');
        resultsScreen.classList.add('hide');
    }
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    localStorage.removeItem('quizProgress');
    startQuiz();
}

// Initialize the quiz on page load
document.addEventListener('DOMContentLoaded', initQuiz);
