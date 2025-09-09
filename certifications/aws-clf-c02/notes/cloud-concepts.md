# Domain 1: Cloud Concepts (24%)

> **Video Sections:** 1-3 (0:00 - 2:15:00) | **Quiz:** `../quizzes/domain-1-quiz.md`

## 1.1 Define the AWS Cloud and its value proposition

### What is AWS Cloud?
AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings.

### Key Value Propositions

#### 🌍 Global Reach
- **Regions**: 25+ geographic regions worldwide
- **Availability Zones**: 80+ AZs across regions
- **Edge Locations**: 200+ edge locations for CloudFront
- **Global Services**: Services available worldwide (IAM, Route 53, CloudFront)

#### 💰 Cost Benefits
- **Pay-as-you-go**: Only pay for what you use
- **No upfront costs**: No need to purchase hardware
- **Economies of scale**: AWS's massive scale reduces costs
- **Reserved capacity**: Significant discounts for committed usage

#### ⚡ Agility and Speed
- **Rapid deployment**: Launch resources in minutes
- **Elastic scaling**: Scale up/down based on demand
- **Global deployment**: Deploy worldwide in minutes
- **Innovation**: Access to latest technologies

#### 🔧 Focus on Core Business
- **Managed services**: AWS handles infrastructure management
- **Security**: Enterprise-grade security built-in
- **Compliance**: Meet regulatory requirements
- **Innovation**: Focus on applications, not infrastructure

## 1.2 Identify aspects of AWS Cloud economics

### Total Cost of Ownership (TCO)
- **On-premises costs**: Hardware, software, facilities, personnel
- **Cloud costs**: Pay-per-use, no upfront investment
- **Hidden costs**: Power, cooling, maintenance, security updates

### AWS Pricing Models

#### On-Demand Pricing
- Pay for compute capacity by the hour or second
- No long-term commitments
- Best for: Variable workloads, testing, development

#### Reserved Instances
- 1-3 year commitment
- Up to 75% discount vs On-Demand
- Best for: Predictable, steady-state workloads

#### Spot Instances
- Bid for unused EC2 capacity
- Up to 90% discount vs On-Demand
- Best for: Flexible, fault-tolerant workloads

#### Dedicated Hosts
- Physical servers dedicated to your use
- Full control over instance placement
- Best for: Compliance requirements, licensing

### Cost Optimization Strategies
- **Right-sizing**: Match instance types to workload needs
- **Reserved Instances**: For predictable workloads
- **Spot Instances**: For flexible, fault-tolerant applications
- **Auto Scaling**: Scale based on demand
- **S3 Storage Classes**: Choose appropriate storage tiers

## 1.3 List the different cloud architecture design principles

### AWS Well-Architected Framework (6 Pillars)

#### 1. Operational Excellence
- **Automate changes**: Infrastructure as Code
- **Make frequent, small, reversible changes**
- **Refine operations procedures frequently**
- **Anticipate failure**: Learn from all operational events

#### 2. Security
- **Implement a strong identity foundation**
- **Apply security at all layers**
- **Enable traceability**: Monitor, alert, audit
- **Automate security best practices**
- **Protect data in transit and at rest**

#### 3. Reliability
- **Test recovery procedures**: Chaos engineering
- **Automatically recover from failure**
- **Scale horizontally to increase system availability**
- **Stop guessing capacity**: Monitor and respond to demand

#### 4. Performance Efficiency
- **Democratize advanced technologies**
- **Go global in minutes**: Deploy in multiple regions
- **Use serverless architectures**
- **Experiment more often**: Build and test quickly

#### 5. Cost Optimization
- **Adopt a consumption model**: Pay only for what you use
- **Measure overall efficiency**: Monitor and optimize
- **Stop spending money on undifferentiated heavy lifting**
- **Analyze and attribute expenditure**

#### 6. Sustainability
- **Understand your impact**: Measure and monitor
- **Establish sustainability goals**
- **Maximize utilization**: Right-size and optimize
- **Anticipate and adopt new, more efficient hardware and software offerings**

### Design Principles
- **Design for failure**: Nothing fails, everything fails
- **Decouple components**: Loose coupling, high cohesion
- **Implement elasticity**: Scale up and down automatically
- **Think parallel**: Design for parallel processing
- **Leverage different storage options**: Choose the right tool for the job

## 1.4 Explain the AWS shared responsibility model

### AWS Responsibility (Security OF the Cloud)
- **Infrastructure**: Hardware, software, networking, facilities
- **Compute, storage, database, networking services**
- **Managed services**: RDS, Lambda, DynamoDB, etc.
- **Global infrastructure**: Regions, AZs, Edge locations
- **Compliance certifications**: SOC, PCI, HIPAA, etc.

### Customer Responsibility (Security IN the Cloud)
- **Data**: Classification, encryption, backup, retention
- **Platform, applications, identity and access management**
- **Operating system, network, firewall configuration**
- **Client-side data encryption and data integrity authentication**
- **Security group and network ACL configuration**

### Shared Controls
- **Patch management**: AWS patches infrastructure, customer patches OS/applications
- **Configuration management**: AWS configures infrastructure, customer configures applications
- **Awareness and training**: Both parties responsible for their personnel

## 1.5 Distinguish between different cloud deployment models

### Public Cloud
- **AWS, Azure, Google Cloud**
- **Multi-tenant**: Resources shared among customers
- **Benefits**: Cost-effective, scalable, no maintenance
- **Use cases**: Web applications, development, testing

### Private Cloud
- **Dedicated infrastructure for single organization**
- **On-premises or hosted by third party**
- **Benefits**: Control, security, compliance
- **Use cases**: Sensitive data, regulatory requirements

### Hybrid Cloud
- **Combination of public and private cloud**
- **Connected via secure network**
- **Benefits**: Flexibility, gradual migration
- **Use cases**: Legacy systems, compliance, data sovereignty

### Multi-Cloud
- **Use multiple cloud providers**
- **Avoid vendor lock-in**
- **Benefits**: Best of breed, risk mitigation
- **Use cases**: Large enterprises, specific requirements

## 1.6 Compare AWS pricing models

### Compute Pricing
| Model | Discount | Commitment | Use Case |
|-------|----------|------------|----------|
| On-Demand | 0% | None | Variable workloads |
| Reserved | Up to 75% | 1-3 years | Steady workloads |
| Spot | Up to 90% | None | Flexible workloads |
| Dedicated Hosts | Variable | 1-3 years | Compliance needs |

### Storage Pricing
- **S3 Standard**: Frequently accessed data
- **S3 IA**: Infrequently accessed data (cheaper)
- **S3 Glacier**: Archive data (cheapest)
- **EBS**: Block storage for EC2 instances

### Data Transfer Pricing
- **Inbound**: Free (data coming into AWS)
- **Outbound**: Charged (data leaving AWS)
- **CloudFront**: Global content delivery network

## 1.7 Recognize the various account structures in relation to AWS billing and pricing

### AWS Account Types

#### Root Account
- **Master account**: Full access to all AWS services
- **Billing responsibility**: Pays for all usage
- **Security**: Should not be used for daily operations
- **MFA**: Should always be enabled

#### IAM Users
- **Individual users**: People or applications
- **Permissions**: Controlled by policies
- **Access keys**: For programmatic access
- **MFA**: Recommended for enhanced security

#### IAM Roles
- **Temporary credentials**: For services or users
- **Cross-account access**: Assume roles across accounts
- **Service roles**: For AWS services to access resources
- **No long-term credentials**: More secure than users

### AWS Organizations
- **Consolidated billing**: Single bill for multiple accounts
- **Policy management**: Apply policies across accounts
- **Account management**: Create and manage accounts
- **Cost allocation**: Track costs by account/tag

### Billing and Cost Management
- **Cost Explorer**: Visualize and analyze costs
- **Budgets**: Set cost and usage budgets
- **Cost Allocation Tags**: Track costs by resource
- **Reserved Instance Reporting**: Track RI utilization

## 🔗 Integration with Microservices

### How Cloud Concepts Apply to Microservices

#### Scalability
- **Auto Scaling Groups**: Scale microservices based on demand
- **Load Balancers**: Distribute traffic across microservice instances
- **Container Services**: ECS/EKS for containerized microservices

#### Global Deployment
- **Multi-region deployment**: Deploy microservices globally
- **Edge locations**: Cache microservice responses globally
- **DNS routing**: Route traffic to closest microservice instance

#### Cost Optimization
- **Right-sizing**: Match microservice resources to actual needs
- **Spot instances**: Use for fault-tolerant microservices
- **Reserved capacity**: For predictable microservice workloads

#### Security
- **VPC**: Isolate microservices in private subnets
- **Security Groups**: Control traffic between microservices
- **IAM roles**: Secure microservice-to-microservice communication

---

*Next: [Domain 2: Security and Compliance](../notes/security-compliance.md)*
