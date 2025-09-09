# AWS Architecture Diagrams

## AWS Global Infrastructure

```mermaid
graph TB
    subgraph "AWS Global Infrastructure"
        subgraph "Regions"
            subgraph "US East (N. Virginia)"
                AZ1[Availability Zone 1]
                AZ2[Availability Zone 2]
                AZ3[Availability Zone 3]
            end
            subgraph "US West (Oregon)"
                AZ4[Availability Zone 1]
                AZ5[Availability Zone 2]
                AZ6[Availability Zone 3]
            end
            subgraph "Europe (Ireland)"
                AZ7[Availability Zone 1]
                AZ8[Availability Zone 2]
                AZ9[Availability Zone 3]
            end
        end
        
        subgraph "Edge Locations"
            EL1[Edge Location 1]
            EL2[Edge Location 2]
            EL3[Edge Location 3]
            EL4[Edge Location 4]
        end
        
        subgraph "Global Services"
            IAM[AWS IAM]
            Route53[Amazon Route 53]
            CloudFront[Amazon CloudFront]
        end
    end
    
    Users[Users] --> CloudFront
    CloudFront --> EL1
    CloudFront --> EL2
    CloudFront --> EL3
    CloudFront --> EL4
    
    Route53 --> AZ1
    Route53 --> AZ4
    Route53 --> AZ7
```

## AWS Well-Architected Framework

```mermaid
graph TB
    subgraph "AWS Well-Architected Framework"
        subgraph "Six Pillars"
            Security[Security]
            Reliability[Reliability]
            Performance[Performance Efficiency]
            Cost[Cost Optimization]
            Operations[Operational Excellence]
            Sustainability[Sustainability]
        end
        
        subgraph "Design Principles"
            DP1[Stop guessing capacity]
            DP2[Test systems at production scale]
            DP3[Automate to make architectural experimentation easier]
            DP4[Allow for evolutionary architectures]
            DP5[Drive architectures using data]
            DP6[Improve through game days]
        end
        
        subgraph "General Design Principles"
            GDP1[Implement a strong identity foundation]
            GDP2[Apply security at all layers]
            GDP3[Enable traceability]
            GDP4[Automate security best practices]
            GDP5[Protect data in transit and at rest]
        end
    end
    
    Security --> DP1
    Security --> DP2
    Reliability --> DP3
    Reliability --> DP4
    Performance --> DP5
    Performance --> DP6
    Cost --> GDP1
    Operations --> GDP2
    Sustainability --> GDP3
```

## AWS Shared Responsibility Model

```mermaid
graph TB
    subgraph "AWS Shared Responsibility Model"
        subgraph "AWS Responsibility - Security OF the Cloud"
            AWS1[Infrastructure Security]
            AWS2[Hardware and Software]
            AWS3[Global Infrastructure]
            AWS4[Compliance Certifications]
            AWS5[Managed Services]
        end
        
        subgraph "Customer Responsibility - Security IN the Cloud"
            C1[Data Security]
            C2[Application Security]
            C3[Identity and Access Management]
            C4[Network Security]
            C5[Operating System]
        end
        
        subgraph "Shared Controls"
            S1[Patch Management]
            S2[Configuration Management]
            S3[Awareness and Training]
        end
    end
    
    AWS1 --> S1
    AWS2 --> S2
    AWS3 --> S3
    AWS4 --> C1
    AWS5 --> C2
    
    C1 --> S1
    C2 --> S2
    C3 --> S3
    C4 --> C1
    C5 --> C2
```

## AWS Services by Category

```mermaid
graph TB
    subgraph "AWS Services by Category"
        subgraph "Compute"
            EC2[Amazon EC2]
            Lambda[AWS Lambda]
            ECS[Amazon ECS]
            EKS[Amazon EKS]
            Fargate[AWS Fargate]
        end
        
        subgraph "Storage"
            S3[Amazon S3]
            EBS[Amazon EBS]
            EFS[Amazon EFS]
            FSx[Amazon FSx]
            SG[Storage Gateway]
        end
        
        subgraph "Database"
            RDS[Amazon RDS]
            DynamoDB[Amazon DynamoDB]
            Redshift[Amazon Redshift]
            ElastiCache[Amazon ElastiCache]
        end
        
        subgraph "Networking"
            VPC[Amazon VPC]
            CloudFront[Amazon CloudFront]
            Route53[Amazon Route 53]
            APIGateway[AWS API Gateway]
        end
        
        subgraph "Security"
            IAM[AWS IAM]
            CloudTrail[AWS CloudTrail]
            Config[AWS Config]
            GuardDuty[Amazon GuardDuty]
            Shield[AWS Shield]
            WAF[AWS WAF]
        end
        
        subgraph "Management"
            CloudWatch[Amazon CloudWatch]
            CloudFormation[AWS CloudFormation]
            Organizations[AWS Organizations]
            TrustedAdvisor[AWS Trusted Advisor]
        end
    end
```

## Microservices Architecture on AWS

```mermaid
graph TB
    subgraph "Microservices Architecture on AWS"
        subgraph "API Layer"
            APIGateway[AWS API Gateway]
            CloudFront[Amazon CloudFront]
        end
        
        subgraph "Application Layer"
            subgraph "Microservices"
                MS1[User Service]
                MS2[Order Service]
                MS3[Payment Service]
                MS4[Inventory Service]
            end
            
            subgraph "Container Services"
                ECS[Amazon ECS]
                EKS[Amazon EKS]
                Lambda[AWS Lambda]
            end
        end
        
        subgraph "Data Layer"
            subgraph "Databases"
                RDS[Amazon RDS]
                DynamoDB[Amazon DynamoDB]
                ElastiCache[Amazon ElastiCache]
            end
            
            subgraph "Storage"
                S3[Amazon S3]
                EFS[Amazon EFS]
            end
        end
        
        subgraph "Messaging"
            SQS[Amazon SQS]
            SNS[Amazon SNS]
            EventBridge[Amazon EventBridge]
        end
        
        subgraph "Monitoring"
            CloudWatch[Amazon CloudWatch]
            XRay[AWS X-Ray]
        end
    end
    
    Users[Users] --> CloudFront
    CloudFront --> APIGateway
    APIGateway --> MS1
    APIGateway --> MS2
    APIGateway --> MS3
    APIGateway --> MS4
    
    MS1 --> RDS
    MS2 --> DynamoDB
    MS3 --> ElastiCache
    MS4 --> S3
    
    MS1 --> SQS
    MS2 --> SNS
    MS3 --> EventBridge
    MS4 --> SQS
    
    MS1 --> CloudWatch
    MS2 --> XRay
    MS3 --> CloudWatch
    MS4 --> XRay
```

## AWS Pricing Models

```mermaid
graph TB
    subgraph "AWS Pricing Models"
        subgraph "Compute Pricing"
            OnDemand[On-Demand Instances]
            Reserved[Reserved Instances]
            Spot[Spot Instances]
            Dedicated[Dedicated Hosts]
        end
        
        subgraph "Storage Pricing"
            S3Standard[S3 Standard]
            S3IA[S3 Infrequent Access]
            S3Glacier[S3 Glacier]
            S3DeepArchive[S3 Deep Archive]
        end
        
        subgraph "Data Transfer Pricing"
            Inbound[Inbound Data - Free]
            Outbound[Outbound Data - Charged]
            CloudFront[CloudFront - Charged]
        end
        
        subgraph "Database Pricing"
            RDSOnDemand[RDS On-Demand]
            RDSReserved[RDS Reserved]
            DynamoDBOnDemand[DynamoDB On-Demand]
            DynamoDBProvisioned[DynamoDB Provisioned]
        end
    end
    
    OnDemand --> S3Standard
    Reserved --> S3IA
    Spot --> S3Glacier
    Dedicated --> S3DeepArchive
    
    S3Standard --> Inbound
    S3IA --> Outbound
    S3Glacier --> CloudFront
    S3DeepArchive --> RDSOnDemand
    
    Inbound --> RDSReserved
    Outbound --> DynamoDBOnDemand
    CloudFront --> DynamoDBProvisioned
```

## AWS Support Plans

```mermaid
graph TB
    subgraph "AWS Support Plans"
        subgraph "Basic Support"
            B1[Account and billing support]
            B2[Documentation and forums]
            B3[No technical support]
        end
        
        subgraph "Developer Support"
            D1[Business hours email support]
            D2[1 developer contact]
            D3[General guidance]
        end
        
        subgraph "Business Support"
            B1[24/7 phone, email, chat]
            B2[Unlimited contacts]
            B3[Production system guidance]
            B4[Trusted Advisor]
        end
        
        subgraph "Enterprise Support"
            E1[24/7 phone, email, chat]
            E2[Unlimited contacts]
            E3[Production system guidance]
            E4[Technical Account Manager]
            E5[Concierge support]
        end
    end
    
    B1 --> D1
    B2 --> D2
    B3 --> D3
    
    D1 --> B1
    D2 --> B2
    D3 --> B3
    
    B1 --> E1
    B2 --> E2
    B3 --> E3
    B4 --> E4
```

---

*These diagrams help visualize key AWS concepts and can be used for study and reference.*
