# Domain 2: Security and Compliance (30%)

> **Video Sections:** 4-6 (2:15:00 - 4:45:00) | **Quiz:** `../quizzes/domain-2-quiz.md`

## 2.1 Define the AWS shared responsibility model

### AWS Responsibility (Security OF the Cloud)
- **Infrastructure Security**: Physical data centers, hardware, software
- **Managed Services**: RDS, Lambda, DynamoDB, S3, etc.
- **Global Infrastructure**: Regions, Availability Zones, Edge locations
- **Compliance Certifications**: SOC, PCI DSS, HIPAA, ISO, FedRAMP
- **Network Security**: DDoS protection, network monitoring

### Customer Responsibility (Security IN the Cloud)
- **Data Security**: Encryption, classification, backup, retention
- **Application Security**: Secure coding, vulnerability management
- **Identity and Access Management**: Users, groups, roles, policies
- **Network Security**: VPC configuration, security groups, NACLs
- **Operating System**: Patching, configuration, monitoring

### Shared Controls
- **Patch Management**: AWS patches infrastructure, customer patches OS/apps
- **Configuration Management**: Both parties configure their components
- **Awareness and Training**: Both responsible for their personnel

## 2.2 Define AWS Cloud security and compliance concepts

### Security Services Overview

#### Identity and Access Management (IAM)
- **Centralized access control** for AWS resources
- **Users, groups, roles, and policies**
- **Multi-factor authentication (MFA)**
- **Federated access** with external identity providers

#### AWS CloudTrail
- **Logs API calls** and account activity
- **Audit trail** for compliance and security
- **Event history** for troubleshooting
- **Integration** with CloudWatch and S3

#### AWS Config
- **Resource inventory** and configuration history
- **Compliance monitoring** and reporting
- **Configuration changes** tracking
- **Remediation** through automated rules

#### AWS GuardDuty
- **Threat detection** using machine learning
- **Malware detection** and suspicious activity
- **Integration** with other security services
- **Continuous monitoring** of AWS accounts

#### AWS Shield
- **DDoS protection** for AWS resources
- **Standard**: Free for all AWS customers
- **Advanced**: Additional protection with 24/7 support

### Compliance Programs

#### SOC (Service Organization Control)
- **SOC 1**: Financial reporting controls
- **SOC 2**: Security, availability, processing integrity
- **SOC 3**: Public trust report

#### PCI DSS (Payment Card Industry)
- **Level 1**: Merchants processing 6M+ transactions
- **Level 2**: Merchants processing 1M-6M transactions
- **AWS services** that are PCI compliant

#### HIPAA (Health Insurance Portability)
- **Protected Health Information (PHI)**
- **Business Associate Agreement (BAA)**
- **AWS services** that support HIPAA compliance

#### ISO 27001
- **Information security management**
- **Risk management** framework
- **Continuous improvement** process

## 2.3 Identify AWS access management capabilities

### IAM Components

#### Users
- **Individual identities** for people or applications
- **Long-term credentials**: Access keys, passwords
- **Permissions**: Attached via groups or policies
- **MFA**: Additional security layer

#### Groups
- **Collection of users** with similar permissions
- **Easier management** of permissions
- **Cannot contain other groups**
- **Users can belong to multiple groups**

#### Roles
- **Temporary credentials** for services or users
- **No long-term credentials** (more secure)
- **Cross-account access** capabilities
- **Service roles** for AWS services

#### Policies
- **JSON documents** that define permissions
- **Identity-based**: Attached to users/groups/roles
- **Resource-based**: Attached to resources
- **Inline vs Managed**: Custom vs AWS managed

### Policy Types

#### AWS Managed Policies
- **Pre-built policies** by AWS
- **Common use cases**: PowerUserAccess, ReadOnlyAccess
- **Regular updates** by AWS
- **Cannot be modified**

#### Customer Managed Policies
- **Custom policies** created by customers
- **Can be modified** and versioned
- **Reusable** across multiple identities
- **Better organization** than inline policies

#### Inline Policies
- **Embedded directly** in identity
- **Cannot be reused** or versioned
- **Deleted** when identity is deleted
- **Use for unique permissions**

### Access Patterns

#### Programmatic Access
- **Access keys**: Access Key ID + Secret Access Key
- **Temporary credentials**: STS tokens
- **Best practice**: Use roles instead of access keys
- **Rotation**: Regular key rotation recommended

#### Console Access
- **Username and password**
- **MFA**: Strongly recommended
- **Session duration**: Configurable
- **Sign-in URL**: Account-specific

#### Cross-Account Access
- **AssumeRole**: Temporary access to another account
- **External ID**: Additional security parameter
- **Duration**: Configurable (1 hour to 12 hours)
- **Audit trail**: CloudTrail logs all assume role calls

## 2.4 Identify resources for security support

### AWS Security Documentation
- **AWS Security Best Practices**: Comprehensive security guide
- **AWS Well-Architected Security Pillar**: Security design principles
- **AWS Security Blog**: Latest security updates and best practices
- **AWS Security Whitepapers**: Detailed security information

### AWS Support Plans
- **Basic**: Account and billing support only
- **Developer**: Business hours email support
- **Business**: 24/7 phone, email, chat support
- **Enterprise**: 24/7 phone, email, chat + TAM

### AWS Professional Services
- **Security Assessment**: Comprehensive security review
- **Compliance Support**: Help with compliance requirements
- **Migration Services**: Secure migration to AWS
- **Training**: Security training and certification

### Third-Party Security Tools
- **AWS Marketplace**: Security tools and solutions
- **Partner Solutions**: Validated security products
- **Open Source**: Community security tools
- **Commercial**: Enterprise security solutions

## 2.5 Identify AWS services that are used to interact with the AWS platform

### Management and Governance

#### AWS Management Console
- **Web-based interface** for AWS services
- **User-friendly** graphical interface
- **Service-specific** consoles available
- **Mobile app** for iOS and Android

#### AWS CLI (Command Line Interface)
- **Command-line tool** for AWS services
- **Automation** and scripting capabilities
- **Cross-platform** support
- **Configuration** via profiles

#### AWS SDKs (Software Development Kits)
- **Language-specific** libraries
- **Simplified** AWS service integration
- **Multiple languages**: Python, Java, .NET, etc.
- **Consistent** API across languages

#### AWS CloudFormation
- **Infrastructure as Code** (IaC)
- **Templates** for resource provisioning
- **Version control** and change management
- **Stack management** and rollback

### Monitoring and Logging

#### Amazon CloudWatch
- **Monitoring** and observability
- **Metrics, logs, and alarms**
- **Dashboards** for visualization
- **Automated responses** to events

#### AWS CloudTrail
- **API call logging** and auditing
- **Event history** for compliance
- **Integration** with other services
- **S3 storage** for log files

#### AWS X-Ray
- **Distributed tracing** for applications
- **Performance analysis** and debugging
- **Service map** visualization
- **Integration** with Lambda, ECS, EC2

### Security and Compliance

#### AWS IAM
- **Identity and access management**
- **Users, groups, roles, policies**
- **MFA** and federated access
- **Fine-grained permissions**

#### AWS KMS (Key Management Service)
- **Encryption key management**
- **Hardware security modules** (HSMs)
- **Integration** with AWS services
- **Audit trail** for key usage

#### AWS Secrets Manager
- **Secure storage** for secrets
- **Automatic rotation** of credentials
- **Integration** with applications
- **Encryption** at rest and in transit

## 2.6 Recognize the different account structures in relation to AWS billing and pricing

### Single Account Structure
- **One AWS account** for all resources
- **Simple billing** and management
- **Limited isolation** between projects
- **Suitable for**: Small organizations, simple projects

### Multiple Account Structure
- **Separate accounts** for different purposes
- **Better isolation** and security
- **Complex billing** and management
- **Suitable for**: Large organizations, compliance requirements

### AWS Organizations
- **Centralized management** of multiple accounts
- **Consolidated billing** across accounts
- **Policy management** (SCP, IAM)
- **Account creation** and management

#### Organizational Units (OUs)
- **Logical grouping** of accounts
- **Policy inheritance** from parent OUs
- **Flexible structure** for large organizations
- **Cost allocation** and tracking

#### Service Control Policies (SCPs)
- **Centralized permissions** management
- **Prevent** certain actions across accounts
- **Whitelist** or blacklist permissions
- **Applied** to OUs or individual accounts

### Billing and Cost Management
- **Consolidated billing**: Single bill for all accounts
- **Cost allocation tags**: Track costs by project/department
- **Reserved Instance sharing**: Share RIs across accounts
- **Cost Explorer**: Analyze costs across accounts

## 🔗 Integration with Microservices

### Security for Microservices Architecture

#### Service-to-Service Authentication
- **IAM roles**: Secure communication between services
- **Service mesh**: Istio, App Mesh for service communication
- **API Gateway**: Centralized authentication and authorization
- **JWT tokens**: Stateless authentication

#### Network Security
- **VPC**: Isolate microservices in private subnets
- **Security Groups**: Control traffic between microservices
- **NACLs**: Additional network-level security
- **PrivateLink**: Secure communication with AWS services

#### Data Security
- **Encryption at rest**: S3, RDS, DynamoDB encryption
- **Encryption in transit**: TLS/SSL for all communications
- **Secrets management**: AWS Secrets Manager for API keys
- **Key rotation**: Automatic rotation of encryption keys

#### Monitoring and Compliance
- **CloudTrail**: Audit all API calls and changes
- **CloudWatch**: Monitor microservice performance and errors
- **X-Ray**: Trace requests across microservices
- **Config**: Track configuration changes and compliance

---

*Next: [Domain 3: Cloud Technology and Services](../notes/technology-services.md)*
