# Domain 4: Billing, Pricing, and Support (12%)

> **Video Sections:** 10-12 (8:30:00 - 12:00:00) | **Quiz:** `../quizzes/domain-4-quiz.md`

## 4.1 Compare and contrast the various pricing models for AWS

### AWS Pricing Philosophy
- **Pay-as-you-go**: Only pay for what you use
- **Pay less when you reserve**: Discounts for committed usage
- **Pay less when you use more**: Volume discounts
- **Pay even less as AWS grows**: Economies of scale

### Compute Pricing Models

#### On-Demand Pricing
- **Pay per hour/second**: No upfront costs
- **No long-term commitments**: Cancel anytime
- **Best for**: Variable workloads, testing, development
- **Pricing**: Full price, no discounts
- **Use cases**: Unpredictable workloads, short-term projects

#### Reserved Instances (RIs)
- **1-3 year commitment**: Significant discounts
- **Up to 75% savings**: Compared to On-Demand
- **Payment options**: All upfront, partial upfront, no upfront
- **Best for**: Predictable, steady-state workloads
- **Use cases**: Production applications, databases

#### Spot Instances
- **Bid for unused capacity**: Up to 90% savings
- **Can be interrupted**: AWS can reclaim instances
- **Best for**: Fault-tolerant, flexible workloads
- **Use cases**: Batch processing, data analysis, testing

#### Dedicated Hosts
- **Physical servers**: Dedicated to your use
- **Full control**: Over instance placement
- **Compliance**: Meet regulatory requirements
- **Best for**: Licensing requirements, compliance
- **Use cases**: Software with per-socket licensing

### Storage Pricing Models

#### Amazon S3 Storage Classes
| Class | Use Case | Durability | Availability | Cost |
|-------|----------|------------|--------------|------|
| **Standard** | Frequently accessed | 99.999999999% | 99.99% | Highest |
| **IA** | Infrequently accessed | 99.999999999% | 99.9% | Lower |
| **Glacier** | Archive data | 99.999999999% | 99.99% | Lowest |
| **Deep Archive** | Long-term archive | 99.999999999% | 99.99% | Lowest |

#### Amazon EBS Volume Types
- **gp3**: General purpose SSD, latest generation
- **gp2**: General purpose SSD, previous generation
- **io1/io2**: Provisioned IOPS SSD
- **st1**: Throughput optimized HDD
- **sc1**: Cold HDD

### Data Transfer Pricing
- **Inbound data**: Free (data coming into AWS)
- **Outbound data**: Charged (data leaving AWS)
- **CloudFront**: Global content delivery network
- **Direct Connect**: Dedicated network connection

## 4.2 Recognize the various account structures in relation to AWS billing and pricing

### Single Account Structure
- **One AWS account**: All resources in one account
- **Simple billing**: Single bill for all usage
- **Limited isolation**: All resources share the same account
- **Suitable for**: Small organizations, simple projects
- **Billing**: Direct billing from AWS

### Multiple Account Structure
- **Separate accounts**: Different accounts for different purposes
- **Better isolation**: Resources isolated by account
- **Complex billing**: Multiple bills to manage
- **Suitable for**: Large organizations, compliance requirements
- **Billing**: Each account billed separately

### AWS Organizations
- **Centralized management**: Manage multiple accounts
- **Consolidated billing**: Single bill for all accounts
- **Account hierarchy**: Organizational units (OUs)
- **Policy management**: Service Control Policies (SCPs)
- **Cost allocation**: Track costs by account/OU

#### Organizational Units (OUs)
- **Logical grouping**: Organize accounts by department/project
- **Policy inheritance**: Inherit policies from parent OUs
- **Cost tracking**: Track costs by OU
- **Flexible structure**: Adapt to organization needs

#### Consolidated Billing
- **Single bill**: One bill for all accounts
- **Volume discounts**: Aggregate usage across accounts
- **Reserved Instance sharing**: Share RIs across accounts
- **Cost allocation**: Track costs by account/tag

### Billing and Cost Management
- **Cost Explorer**: Visualize and analyze costs
- **Budgets**: Set cost and usage budgets
- **Cost Allocation Tags**: Track costs by resource
- **Reserved Instance Reporting**: Track RI utilization
- **Cost and Usage Report**: Detailed billing information

## 4.3 Identify resources available for billing support

### AWS Billing Documentation
- **Billing and Cost Management User Guide**: Comprehensive billing guide
- **AWS Pricing Calculator**: Estimate costs for services
- **AWS Cost Optimization**: Best practices for cost optimization
- **AWS Well-Architected Cost Optimization Pillar**: Cost optimization principles

### AWS Support Plans
- **Basic Support**: Account and billing support only
- **Developer Support**: Business hours email support
- **Business Support**: 24/7 phone, email, chat support
- **Enterprise Support**: 24/7 + Technical Account Manager (TAM)

### Cost Management Tools
- **AWS Cost Explorer**: Visualize and analyze costs
- **AWS Budgets**: Set cost and usage budgets
- **AWS Cost and Usage Report**: Detailed billing information
- **AWS Cost Anomaly Detection**: Detect unusual spending
- **AWS Compute Optimizer**: Right-size EC2 instances

### Third-Party Tools
- **AWS Marketplace**: Cost management tools
- **Partner Solutions**: Validated cost optimization tools
- **CloudHealth**: Multi-cloud cost management
- **Cloudyn**: Cost optimization and governance
- **Spot by NetApp**: Spot instance management

## 4.4 Identify where to find pricing information on AWS services

### Official AWS Pricing Resources

#### AWS Pricing Page
- **Service pricing**: Detailed pricing for all services
- **Regional pricing**: Pricing by region
- **Pricing models**: On-demand, Reserved, Spot pricing
- **Free Tier**: Services available in free tier
- **URL**: https://aws.amazon.com/pricing/

#### AWS Pricing Calculator
- **Cost estimation**: Estimate costs for services
- **Service selection**: Choose services and configurations
- **Pricing comparison**: Compare different options
- **Export options**: Export estimates to Excel/PDF
- **URL**: https://calculator.aws/

#### AWS Free Tier
- **Free services**: Services available for free
- **Usage limits**: Limits for free tier usage
- **Duration**: 12 months for some services
- **Always free**: Some services always free
- **URL**: https://aws.amazon.com/free/

### Service-Specific Pricing
- **EC2 Pricing**: Instance types and pricing
- **S3 Pricing**: Storage classes and pricing
- **RDS Pricing**: Database instance pricing
- **Lambda Pricing**: Compute and request pricing
- **CloudFront Pricing**: Data transfer and request pricing

### Regional Pricing
- **US East (N. Virginia)**: Often the cheapest region
- **US West (Oregon)**: West coast pricing
- **Europe (Ireland)**: European pricing
- **Asia Pacific (Tokyo)**: Asia pricing
- **Pricing variations**: Different regions have different prices

## 4.5 Recognize the various account structures in relation to AWS billing and pricing

### Account Hierarchy

#### Root Account
- **Master account**: Full access to all AWS services
- **Billing responsibility**: Pays for all usage
- **Security**: Should not be used for daily operations
- **MFA**: Should always be enabled
- **Billing**: Can view all account billing

#### Member Accounts
- **Child accounts**: Created under root account
- **Limited access**: Based on permissions
- **Billing**: Consolidated under root account
- **Isolation**: Resources isolated by account
- **Policies**: Can have different policies

#### Organizational Units (OUs)
- **Logical grouping**: Organize accounts
- **Policy inheritance**: Inherit policies from parent
- **Cost allocation**: Track costs by OU
- **Flexible structure**: Adapt to organization needs

### Billing Models

#### Consolidated Billing
- **Single bill**: One bill for all accounts
- **Volume discounts**: Aggregate usage across accounts
- **Reserved Instance sharing**: Share RIs across accounts
- **Cost allocation**: Track costs by account/tag
- **Benefits**: Simplified billing, volume discounts

#### Individual Billing
- **Separate bills**: Each account billed separately
- **No volume discounts**: Each account billed individually
- **No RI sharing**: RIs cannot be shared
- **Complex management**: Multiple bills to manage
- **Use cases**: Independent organizations

### Cost Allocation and Tracking

#### Cost Allocation Tags
- **Resource tagging**: Tag resources for cost tracking
- **Cost allocation**: Allocate costs by tag
- **Reporting**: Generate cost reports by tag
- **Best practices**: Consistent tagging strategy
- **Use cases**: Project-based billing, department billing

#### Cost and Usage Reports
- **Detailed billing**: Line-item billing information
- **S3 storage**: Reports stored in S3
- **Analysis**: Analyze costs with tools
- **Integration**: Works with third-party tools
- **Use cases**: Detailed cost analysis, compliance

## 🔗 Integration with Microservices

### Cost Optimization for Microservices

#### Right-Sizing
- **Instance types**: Choose appropriate instance types
- **Auto Scaling**: Scale based on demand
- **Load balancing**: Distribute traffic efficiently
- **Monitoring**: Monitor resource utilization

#### Reserved Capacity
- **Reserved Instances**: For predictable workloads
- **Savings Plans**: Flexible pricing for compute usage
- **Dedicated Hosts**: For compliance requirements
- **Cost savings**: Significant discounts for committed usage

#### Serverless Architecture
- **AWS Lambda**: Pay per execution
- **Amazon API Gateway**: Pay per API call
- **Amazon DynamoDB**: Pay per request
- **Cost efficiency**: Only pay for actual usage

#### Storage Optimization
- **S3 Storage Classes**: Choose appropriate storage class
- **Lifecycle policies**: Automatically transition data
- **Compression**: Reduce storage costs
- **Deduplication**: Eliminate duplicate data

#### Monitoring and Alerting
- **CloudWatch**: Monitor costs and usage
- **Budgets**: Set cost and usage budgets
- **Alerts**: Get notified of unusual spending
- **Cost optimization**: Regular cost reviews

---

*Next: [Exam Simulation Questions](../exam-sim-questions.md)*
