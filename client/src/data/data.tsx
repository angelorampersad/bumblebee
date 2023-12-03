import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const labels = [
    {
      value: "platform",
      label: "Platform",
    },
    {
      value: "feature",
      label: "Feature",
    }
  ]
  
  export const statuses = [
    {
      value: "pending",
      label: "Pending",
      icon: CircleIcon,
    },
    {
      value: "collecting",
      label: "Collecting",
      icon: CheckCircledIcon,
    },
    {
      value: "incomplete",
      label: "Incomplete",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]
  
  export const tiers = [
    {
      label: "Tier 1",
      value: "tier_1",
      icon: ArrowUpIcon,
    },
    {
      label: "Tier 2",
      value: "tier_2",
      icon: ArrowRightIcon,
    },
    {
      label: "Tier 3",
      value: "tier_3",
      icon: ArrowDownIcon,
    },
  ]