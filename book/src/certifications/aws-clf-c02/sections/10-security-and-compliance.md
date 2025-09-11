# Security & Compliance (Shared Responsibility Model)

Subtitle: Governance, identity, protection, detection, and response

## Shared Responsibility
- AWS: Security OF the cloud (infrastructure, hardware, hypervisor)
- You: Security IN the cloud (data, IAM, network, configuration)

```text
Service Type  | Customer Responsibilities                     | AWS Responsibilities
--------------|-----------------------------------------------|----------------------
EC2           | OS patching, IAM, SGs/NACLs, data encryption  | Facilities, hardware, hypervisor
RDS           | Data, IAM, auth, parameter configs            | DB software patching, availability
Lambda        | Code, IAM permissions, input validation       | Runtime, scaling, infra security
```

## Identity and access
- IAM users/roles/policies; role-based access > long-lived keys
- IAM Identity Center (SSO) for workforce auth
- Permission boundaries, SCPs, and resource policies

## Data protection
- Encryption at rest (KMS) and in transit (TLS)
- Secrets Manager/Parameter Store for secrets

## Detection and response
- CloudTrail, Config, GuardDuty, Security Hub
- WAF + Shield for app and DDoS protection

## Compliance foundations
- Artifact for compliance reports
- Audit Manager for assessments

## Hands-on
- Create least-privilege IAM role for an EC2 instance profile
- Enable CloudTrail org trail and GuardDuty
- Attach WAF to an ALB and create a rate-based rule

---

Next: IAM Deep Dive
