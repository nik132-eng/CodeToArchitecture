# Identity & Access Management (IAM)

Subtitle: Principals, policies, roles, and best practices

## Core concepts
- Principals: users, roles, federated identities
- Policies: JSON documents granting permissions (effect, action, resource, condition)
- Evaluation logic: explicit deny > allow; SCP boundaries apply

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::example-bucket/*"]
    }
  ]
}
```

## Roles vs users
- Prefer roles with temporary credentials (STS) over IAM users
- Use instance profiles (EC2), task roles (ECS), service roles (Lambda)

## Guardrails
- Permission boundaries, SCPs, condition keys (aws:PrincipalOrgID)
- Access Analyzer to verify external access and unintended resource sharing

## Secrets
- Use Secrets Manager for rotation; Parameter Store for config/secrets lite

## Hands-on
- Create a role for Lambda with least privileges; attach a policy
- Block access to S3 unless encrypted using a policy condition

---

Next: Billing, Pricing, and Support
