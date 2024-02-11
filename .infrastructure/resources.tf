resource "aws_s3_bucket" "state" {
  bucket = "tf-state"

  tags = {
    Name        = "Terraform State"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_acl" "example" {
  bucket = aws_s3_bucket.state.id
  acl    = "private"
}