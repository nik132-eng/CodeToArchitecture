# Domain 3: Cloud Technology and Services (34%)

> **Video Sections:** 7-9 (4:45:00 - 8:30:00) | **Quiz:** `../quizzes/domain-3-quiz.md`

## 3.1 Define methods of deploying and operating in the AWS Cloud

### Deployment Models

#### Infrastructure as a Service (IaaS)
- **Virtual machines**: EC2 instances
- **Storage**: EBS, EFS, S3
- **Networking**: VPC, subnets, security groups
- **Control**: Full control over OS and applications
- **Use cases**: Lift and shift, legacy applications

#### Platform as a Service (PaaS)
- **Managed services**: RDS, Elastic Beanstalk, Lambda
- **No server management**: AWS handles infrastructure
- **Focus on code**: Deploy applications, not servers
- **Use cases**: Web applications, APIs, microservices

#### Software as a Service (SaaS)
- **Complete applications**: WorkSpaces, Chime, QuickSight
- **No infrastructure management**: AWS manages everything
- **Subscription model**: Pay per user or usage
- **Use cases**: Productivity tools, business applications

### Deployment Methods

#### AWS Elastic Beanstalk
- **Platform as a Service**: Deploy web applications
- **Supported platforms**: Java, .NET, PHP, Python, Ruby, Go
- **Automatic scaling**: Based on demand
- **Health monitoring**: Built-in monitoring and logging

#### AWS CloudFormation
- **Infrastructure as Code**: Define infrastructure in templates
- **JSON or YAML**: Template format
- **Stack management**: Create, update, delete resources
- **Rollback capability**: Automatic rollback on failure

#### AWS CodeDeploy
- **Application deployment**: Deploy code to EC2, Lambda, ECS
- **Blue/green deployment**: Zero-downtime deployments
- **Rollback capability**: Quick rollback if issues occur
- **Integration**: Works with CI/CD pipelines

## 3.2 Define the AWS global infrastructure

### Global Infrastructure Components

#### Regions
- **Geographic areas**: Independent of each other
- **Multiple AZs**: 2-6 Availability Zones per region
- **Data sovereignty**: Choose regions for compliance
- **Latency**: Deploy closer to users
- **Services**: Some services are region-specific

#### Availability Zones (AZs)
- **Isolated data centers**: Within a region
- **Independent power**: Separate power and cooling
- **Low latency**: Connected via high-speed links
- **Fault tolerance**: Isolated from failures
- **Multi-AZ deployment**: For high availability

#### Edge Locations
- **CloudFront**: Content delivery network
- **Global reach**: 200+ edge locations worldwide
- **Caching**: Store content closer to users
- **Performance**: Reduced latency for end users
- **DDoS protection**: AWS Shield integration

### Global Services vs Regional Services

#### Global Services
- **Available worldwide**: Same service across all regions
- **Examples**: IAM, Route 53, CloudFront, WAF
- **Data replication**: Automatically replicated globally
- **Consistency**: Same features and pricing globally

#### Regional Services
- **Region-specific**: Deployed in specific regions
- **Examples**: EC2, S3, RDS, Lambda
- **Data residency**: Data stays within the region
- **Compliance**: Meet data sovereignty requirements

## 3.3 Identify the core AWS services

### Compute Services

#### Amazon EC2 (Elastic Compute Cloud)
- **Virtual servers**: Resizable compute capacity
- **Instance types**: General purpose, compute optimized, memory optimized
- **Operating systems**: Linux, Windows, macOS
- **Pricing models**: On-demand, Reserved, Spot, Dedicated Hosts
- **Use cases**: Web servers, applications, databases

#### AWS Lambda
- **Serverless compute**: Run code without servers
- **Event-driven**: Triggered by events
- **Pay per execution**: Only pay when code runs
- **Supported languages**: Python, Node.js, Java, C#, Go, Ruby
- **Use cases**: Microservices, data processing, automation

#### Amazon ECS (Elastic Container Service)
- **Container orchestration**: Run Docker containers
- **Managed service**: AWS handles infrastructure
- **Auto scaling**: Scale based on demand
- **Integration**: Works with ALB, CloudWatch, IAM
- **Use cases**: Microservices, batch processing

#### Amazon EKS (Elastic Kubernetes Service)
- **Managed Kubernetes**: Run Kubernetes on AWS
- **Kubernetes control plane**: Managed by AWS
- **Worker nodes**: EC2 instances or Fargate
- **Integration**: Works with AWS services
- **Use cases**: Containerized applications, microservices

### Storage Services

#### Amazon S3 (Simple Storage Service)
- **Object storage**: Store and retrieve any amount of data
- **Storage classes**: Standard, IA, Glacier, Deep Archive
- **Durability**: 99.999999999% (11 9's)
- **Availability**: 99.99% availability
- **Use cases**: Backup, static websites, data lakes

#### Amazon EBS (Elastic Block Store)
- **Block storage**: Persistent storage for EC2
- **Volume types**: gp3, gp2, io1, io2, st1, sc1
- **Snapshots**: Point-in-time backups
- **Encryption**: Built-in encryption at rest
- **Use cases**: Databases, file systems, boot volumes

#### Amazon EFS (Elastic File System)
- **Managed file system**: NFS file system for EC2
- **Shared storage**: Multiple EC2 instances can access
- **Auto scaling**: Scales automatically
- **Performance modes**: General purpose, Max I/O
- **Use cases**: Content management, web serving, data analytics

### Database Services

#### Amazon RDS (Relational Database Service)
- **Managed databases**: MySQL, PostgreSQL, Oracle, SQL Server
- **Automated backups**: Point-in-time recovery
- **Multi-AZ deployment**: High availability
- **Read replicas**: Scale read performance
- **Use cases**: Web applications, e-commerce, content management

#### Amazon DynamoDB
- **NoSQL database**: Key-value and document database
- **Serverless**: No servers to manage
- **Auto scaling**: Scales automatically
- **Global tables**: Multi-region replication
- **Use cases**: Mobile apps, gaming, IoT, real-time applications

#### Amazon Redshift
- **Data warehouse**: Analytics and business intelligence
- **Columnar storage**: Optimized for analytics
- **SQL interface**: Standard SQL queries
- **Integration**: Works with BI tools
- **Use cases**: Data warehousing, analytics, reporting

### Networking Services

#### Amazon VPC (Virtual Private Cloud)
- **Isolated network**: Private cloud within AWS
- **Subnets**: Public and private subnets
- **Security groups**: Virtual firewalls
- **NACLs**: Network-level access control
- **Use cases**: Secure applications, hybrid cloud

#### Amazon CloudFront
- **Content delivery network**: Global content distribution
- **Edge locations**: 200+ locations worldwide
- **Caching**: Store content closer to users
- **Integration**: Works with S3, ALB, custom origins
- **Use cases**: Static websites, video streaming, API acceleration

#### Amazon Route 53
- **DNS service**: Domain name system
- **Health checks**: Monitor endpoint health
- **Routing policies**: Simple, weighted, latency-based
- **Domain registration**: Register and manage domains
- **Use cases**: Domain management, load balancing, health monitoring

#### AWS API Gateway
- **API management**: Create, publish, maintain APIs
- **Authentication**: IAM, Cognito, custom authorizers
- **Rate limiting**: Throttle requests
- **Integration**: Works with Lambda, EC2, HTTP services
- **Use cases**: Microservices, mobile backends, serverless applications

## 3.4 Identify resources for technology support

### AWS Documentation
- **Service documentation**: Detailed guides for each service
- **API reference**: Complete API documentation
- **Tutorials**: Step-by-step guides
- **Best practices**: Recommended approaches
- **Architecture center**: Reference architectures

### AWS Support
- **Basic support**: Account and billing support
- **Developer support**: Business hours email support
- **Business support**: 24/7 phone, email, chat
- **Enterprise support**: 24/7 + Technical Account Manager

### AWS Training and Certification
- **Digital training**: Free online courses
- **Instructor-led training**: Classroom and virtual
- **Certification programs**: Validate your skills
- **AWS re:Invent**: Annual conference
- **AWS re:Play**: Post-conference party

### Community Resources
- **AWS Forums**: Community support
- **Stack Overflow**: Technical questions
- **GitHub**: Open source projects and examples
- **AWS User Groups**: Local meetups
- **AWS Heroes**: Community experts

## 3.5 Recognize the different account structures in relation to AWS billing and pricing

### Account Types

#### Root Account
- **Master account**: Full access to all AWS services
- **Billing responsibility**: Pays for all usage
- **Security**: Should not be used for daily operations
- **MFA**: Should always be enabled

#### IAM Users
- **Individual identities**: People or applications
- **Permissions**: Controlled by policies
- **Access keys**: For programmatic access
- **MFA**: Recommended for enhanced security

#### IAM Roles
- **Temporary credentials**: For services or users
- **Cross-account access**: Assume roles across accounts
- **Service roles**: For AWS services to access resources
- **No long-term credentials**: More secure than users

### AWS Organizations
- **Centralized management**: Manage multiple accounts
- **Consolidated billing**: Single bill for all accounts
- **Policy management**: Apply policies across accounts
- **Account creation**: Create and manage accounts

#### Organizational Units (OUs)
- **Logical grouping**: Organize accounts
- **Policy inheritance**: Inherit policies from parent OUs
- **Flexible structure**: Adapt to organization needs
- **Cost allocation**: Track costs by OU

#### Service Control Policies (SCPs)
- **Centralized permissions**: Control what accounts can do
- **Prevent actions**: Block certain actions across accounts
- **Whitelist/blacklist**: Allow or deny specific permissions
- **Applied to OUs**: Or individual accounts

## 🔗 Integration with Microservices

### Microservices Architecture on AWS

#### API Gateway
- **Single entry point**: For all microservices
- **Authentication**: Centralized auth for all services
- **Rate limiting**: Protect services from overload
- **Monitoring**: Track API usage and performance
- **Versioning**: Manage API versions

#### Service Discovery
- **AWS Cloud Map**: Service discovery for microservices
- **Health checks**: Monitor service health
- **Load balancing**: Distribute traffic across instances
- **Integration**: Works with ECS, EKS, Lambda

#### Event-Driven Architecture
- **Amazon EventBridge**: Event routing and processing
- **Amazon SNS**: Pub/sub messaging
- **Amazon SQS**: Message queuing
- **Amazon Kinesis**: Real-time data streaming

#### Data Management
- **Database per service**: Each microservice has its own database
- **Amazon RDS**: Relational databases
- **Amazon DynamoDB**: NoSQL databases
- **Amazon ElastiCache**: Caching layer

#### Monitoring and Observability
- **Amazon CloudWatch**: Metrics and logging
- **AWS X-Ray**: Distributed tracing
- **Amazon CloudTrail**: API call auditing
- **AWS Config**: Configuration management

#### Security
- **IAM roles**: Secure service-to-service communication
- **VPC**: Network isolation
- **Security groups**: Traffic control
- **AWS WAF**: Web application firewall

---

*Next: [Domain 4: Billing, Pricing, and Support](../notes/billing-pricing.md)*
