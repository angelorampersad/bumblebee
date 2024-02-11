resource "aws_s3_bucket" "state" {
  bucket = "bumblebee-tf-state"

  tags = {
    Name        = "Terraform State"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_acl" "state" {
  bucket = aws_s3_bucket.state.id
  acl    = "private"
}