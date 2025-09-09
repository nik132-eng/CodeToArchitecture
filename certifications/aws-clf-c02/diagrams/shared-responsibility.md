# AWS Shared Responsibility Model Diagrams

## Overview of Shared Responsibility

```mermaid
graph TB
    subgraph "AWS Shared Responsibility Model"
        subgraph "AWS Responsibility - Security OF the Cloud"
            AWS[Amazon Web Services]
            AWS --> Infrastructure[Infrastructure Security]
            AWS --> Hardware[Hardware and Software]
            AWS --> Global[Global Infrastructure]
            AWS --> Compliance[Compliance Certifications]
            AWS --> Managed[Managed Services]
        end
        
        subgraph "Customer Responsibility - Security IN the Cloud"
            Customer[Customer]
            Customer --> Data[Data Security]
            Customer --> App[Application Security]
            Customer --> IAM[Identity and Access Management]
            Customer --> Network[Network Security]
            Customer --> OS[Operating System]
        end
        
        subgraph "Shared Controls"
            Shared[Shared Controls]
            Shared --> Patch[Patch Management]
            Shared --> Config[Configuration Management]
            Shared --> Training[Awareness and Training]
        end
    end
    
    AWS -.-> Shared
    Customer -.-> Shared
```

## Detailed Responsibility Breakdown

```mermaid
graph TB
    subgraph "AWS Responsibilities"
        subgraph "Infrastructure Layer"
            DataCenters[Physical Data Centers]
            Hardware[Hardware and Software]
            Networking[Network Infrastructure]
            Facilities[Facilities and Utilities]
        end
        
        subgraph "Managed Services"
            RDS[Amazon RDS]
            Lambda[AWS Lambda]
            S3[Amazon S3]
            DynamoDB[Amazon DynamoDB]
            ECS[Amazon ECS]
        end
        
        subgraph "Global Infrastructure"
            Regions[AWS Regions]
            AZs[Availability Zones]
            EdgeLocations[Edge Locations]
        end
        
        subgraph "Compliance"
            Certifications[Compliance Certifications]
            Audits[Third-party Audits]
            Reports[Compliance Reports]
        end
    end
    
    subgraph "Customer Responsibilities"
        subgraph "Data Layer"
            DataClassification[Data Classification]
            DataEncryption[Data Encryption]
            DataBackup[Data Backup]
            DataRetention[Data Retention]
        end
        
        subgraph "Application Layer"
            AppSecurity[Application Security]
            SecureCoding[Secure Coding Practices]
            VulnerabilityMgmt[Vulnerability Management]
            AppMonitoring[Application Monitoring]
        end
        
        subgraph "Identity and Access"
            UserManagement[User Management]
            AccessControl[Access Control]
            MFA[Multi-Factor Authentication]
            PasswordPolicy[Password Policies]
        end
        
        subgraph "Network Security"
            VPCConfig[VPC Configuration]
            SecurityGroups[Security Groups]
            NACLs[Network ACLs]
            FirewallRules[Firewall Rules]
        end
        
        subgraph "Operating System"
            OSPatching[OS Patching]
            OSConfig[OS Configuration]
            OSMonitoring[OS Monitoring]
            OSBackup[OS Backup]
        end
    end
```

## Service-Specific Responsibility Examples

```mermaid
graph TB
    subgraph "Service-Specific Responsibilities"
        subgraph "Amazon EC2"
            subgraph "AWS Responsibility"
                EC2Infra[Infrastructure]
                EC2Hardware[Hardware]
                EC2Network[Network Infrastructure]
            end
            
            subgraph "Customer Responsibility"
                EC2OS[Operating System]
                EC2Apps[Applications]
                EC2Data[Data]
                EC2Config[Configuration]
            end
        end
        
        subgraph "Amazon RDS"
            subgraph "AWS Responsibility"
                RDSInfra[Infrastructure]
                RDSHardware[Hardware]
                RDSOS[Operating System]
                RDSPatching[Database Patching]
            end
            
            subgraph "Customer Responsibility"
                RDSData[Data]
                RDSAccess[Access Control]
                RDSConfig[Configuration]
                RDSBackup[Backup Strategy]
            end
        end
        
        subgraph "AWS Lambda"
            subgraph "AWS Responsibility"
                LambdaInfra[Infrastructure]
                LambdaRuntime[Runtime Environment]
                LambdaScaling[Scaling]
                LambdaMonitoring[Infrastructure Monitoring]
            end
            
            subgraph "Customer Responsibility"
                LambdaCode[Function Code]
                LambdaData[Data]
                LambdaConfig[Configuration]
                LambdaMonitoring[Application Monitoring]
            end
        end
    end
```

## Security Controls by Layer

```mermaid
graph TB
    subgraph "Security Controls by Layer"
        subgraph "Physical Layer"
            Physical[Physical Security]
            Physical --> DataCenter[Data Center Security]
            Physical --> Hardware[Hardware Security]
            Physical --> Environmental[Environmental Controls]
        end
        
        subgraph "Infrastructure Layer"
            Infrastructure[Infrastructure Security]
            Infrastructure --> Network[Network Security]
            Infrastructure --> Compute[Compute Security]
            Infrastructure --> Storage[Storage Security]
        end
        
        subgraph "Platform Layer"
            Platform[Platform Security]
            Platform --> OS[Operating System]
            Platform --> Middleware[Middleware]
            Platform --> Runtime[Runtime Environment]
        end
        
        subgraph "Application Layer"
            Application[Application Security]
            Application --> Code[Application Code]
            Application --> Data[Data Security]
            Application --> Access[Access Control]
        end
        
        subgraph "Data Layer"
            Data[Data Security]
            Data --> Encryption[Encryption]
            Data --> Backup[Backup and Recovery]
            Data --> Classification[Data Classification]
        end
    end
    
    Physical --> Infrastructure
    Infrastructure --> Platform
    Platform --> Application
    Application --> Data
```

## Compliance and Governance

```mermaid
graph TB
    subgraph "Compliance and Governance"
        subgraph "AWS Compliance Programs"
            SOC[SOC 1, 2, 3]
            PCI[PCI DSS]
            HIPAA[HIPAA]
            ISO[ISO 27001]
            FedRAMP[FedRAMP]
        end
        
        subgraph "Customer Compliance Requirements"
            DataResidency[Data Residency]
            DataSovereignty[Data Sovereignty]
            IndustryRegs[Industry Regulations]
            InternalPolicies[Internal Policies]
        end
        
        subgraph "Shared Compliance Activities"
            Auditing[Auditing]
            Reporting[Reporting]
            Monitoring[Monitoring]
            Remediation[Remediation]
        end
    end
    
    SOC --> Auditing
    PCI --> Reporting
    HIPAA --> Monitoring
    ISO --> Remediation
    FedRAMP --> Auditing
    
    DataResidency --> Auditing
    DataSovereignty --> Reporting
    IndustryRegs --> Monitoring
    InternalPolicies --> Remediation
```

## Incident Response and Recovery

```mermaid
graph TB
    subgraph "Incident Response and Recovery"
        subgraph "AWS Incident Response"
            AWSDetect[Detection]
            AWSAnalyze[Analysis]
            AWSContain[Containment]
            AWSRecover[Recovery]
        end
        
        subgraph "Customer Incident Response"
            CustomerDetect[Detection]
            CustomerAnalyze[Analysis]
            CustomerContain[Containment]
            CustomerRecover[Recovery]
        end
        
        subgraph "Shared Activities"
            Communication[Communication]
            Coordination[Coordination]
            Documentation[Documentation]
            LessonsLearned[Lessons Learned]
        end
    end
    
    AWSDetect --> Communication
    AWSAnalyze --> Coordination
    AWSContain --> Documentation
    AWSRecover --> LessonsLearned
    
    CustomerDetect --> Communication
    CustomerAnalyze --> Coordination
    CustomerContain --> Documentation
    CustomerRecover --> LessonsLearned
```

## Best Practices for Shared Responsibility

```mermaid
graph TB
    subgraph "Best Practices for Shared Responsibility"
        subgraph "AWS Best Practices"
            AWSPractices[AWS Best Practices]
            AWSPractices --> WellArchitected[Well-Architected Framework]
            AWSPractices --> SecurityGuidelines[Security Guidelines]
            AWSPractices --> CompliancePrograms[Compliance Programs]
        end
        
        subgraph "Customer Best Practices"
            CustomerPractices[Customer Best Practices]
            CustomerPractices --> SecurityPolicies[Security Policies]
            CustomerPractices --> AccessControls[Access Controls]
            CustomerPractices --> Monitoring[Monitoring and Logging]
        end
        
        subgraph "Shared Best Practices"
            SharedPractices[Shared Best Practices]
            SharedPractices --> RegularReviews[Regular Reviews]
            SharedPractices --> Training[Training and Awareness]
            SharedPractices --> Testing[Testing and Validation]
        end
    end
    
    AWSPractices --> SharedPractices
    CustomerPractices --> SharedPractices
```

---

*These diagrams help visualize the AWS Shared Responsibility Model and can be used for study and reference.*
