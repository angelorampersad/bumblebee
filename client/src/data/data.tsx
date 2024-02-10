import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "platform",
    label: "Platform",
  },
  {
    value: "feature",
    label: "Feature",
  },
];

export const statuses = [
  {
    value: true,
    label: "Published",
    icon: CheckCircledIcon,
  },
  {
    value: false,
    label: "Draft",
    icon: CircleIcon,
  }
];

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
];

export const pillars = [
  {
    value: "customer",
    label: "Customer",
  },
  {
    value: "partner",
    label: "Partner",
  },
  {
    value: "care",
    label: "Care",
  },
  {
    value: "fintech",
    label: "Fintech",
  },
];

export const eventSchemas = [
  "iglu:jet/account_create/jsonschema/1-0-0",
  "iglu:jet/account_delete/jsonschema/1-0-0",
  "iglu:jet/account_login/jsonschema/1-0-0",
  "iglu:jet/account_logout/jsonschema/1-0-0",
  "iglu:jet/account_update/jsonschema/1-0-0",
  "iglu:jet/alert_dismiss/jsonschema/1-0-0",
  "iglu:jet/alert_error/jsonschema/1-0-0",
  "iglu:jet/alert_select/jsonschema/1-0-0",
  "iglu:jet/alert_view/jsonschema/1-0-0",
  "iglu:jet/api_error/jsonschema/1-0-0",
  "iglu:jet/banner_dismiss/jsonschema/1-0-0",
  "iglu:jet/banner_error/jsonschema/1-0-0",
  "iglu:jet/banner_select/jsonschema/1-0-0",
  "iglu:jet/banner_view/jsonschema/1-0-0",
  "iglu:jet/consent_select/jsonschema/1-0-0",
  "iglu:jet/consent_update/jsonschema/1-0-0",
  "iglu:jet/consent_view/jsonschema/1-0-0",
  "iglu:jet/content_dismiss/jsonschema/1-0-0",
  "iglu:jet/content_select/jsonschema/1-0-0",
  "iglu:jet/content_view/jsonschema/1-0-0",
  "iglu:jet/dialog_dismiss/jsonschema/1-0-0",
  "iglu:jet/dialog_error/jsonschema/1-0-0",
  "iglu:jet/dialog_select/jsonschema/1-0-0",
  "iglu:jet/dialog_view/jsonschema/1-0-0",
  "iglu:jet/experiment_active/jsonschema/1-0-0",
  "iglu:jet/feature_engage/jsonschema/1-0-0",
  "iglu:jet/filter_add/jsonschema/1-0-0",
  "iglu:jet/filter_remove/jsonschema/1-0-0",
  "iglu:jet/formField_autofill/jsonschema/1-0-0",
  "iglu:jet/formField_change/jsonschema/1-0-0",
  "iglu:jet/formField_error/jsonschema/1-0-0",
  "iglu:jet/formField_focus/jsonschema/1-0-0",
  "iglu:jet/form_error/jsonschema/1-0-0",
  "iglu:jet/form_start/jsonschema/1-0-0",
  "iglu:jet/form_submit/jsonschema/1-0-0",
  "iglu:jet/form_success/jsonschema/1-0-0",
  "iglu:jet/form_view/jsonschema/1-0-0",
  "iglu:jet/garbage_view/jsonschema/1-0-0",
  "iglu:jet/navigation_select/jsonschema/1-0-0",
  "iglu:jet/search_clear/jsonschema/1-0-0",
  "iglu:jet/search_error/jsonschema/1-0-0",
  "iglu:jet/search_select/jsonschema/1-0-0",
  "iglu:jet/search_start/jsonschema/1-0-0",
  "iglu:jet/search_success/jsonschema/1-0-0",
];

export const contextSchemas = [
  "iglu:jet/cx_api/jsonschema/1-0-0",
  "iglu:jet/cx_authentication/jsonschema/1-0-0",
  "iglu:jet/cx_basket/jsonschema/1-0-0",
  "iglu:jet/cx_component/jsonschema/1-0-0",
  "iglu:jet/cx_consent/jsonschema/1-0-0",
  "iglu:jet/cx_content/jsonschema/1-0-0",
  "iglu:jet/cx_error/jsonschema/1-0-0",
  "iglu:jet/cx_experiment/jsonschema/1-0-0",
  "iglu:jet/cx_filter/jsonschema/1-0-0",
  "iglu:jet/cx_formField/jsonschema/1-0-0",
  "iglu:jet/cx_garbage/jsonschema/1-0-0",
  "iglu:jet/cx_menu/jsonschema/1-0-0",
  "iglu:jet/cx_order/jsonschema/1-0-0",
  "iglu:jet/cx_page/jsonschema/1-0-0",
  "iglu:jet/cx_partner/jsonschema/1-0-0",
  "iglu:jet/cx_payment/jsonschema/1-0-0",
  "iglu:jet/cx_platform/jsonschema/1-0-0",
  "iglu:jet/cx_producer/jsonschema/1-0-0",
  "iglu:jet/cx_product/jsonschema/1-0-0",
  "iglu:jet/cx_productCategory/jsonschema/1-0-0",
  "iglu:jet/cx_request/jsonschema/1-0-0",
  "iglu:jet/cx_user/jsonschema/1-0-0",
  "iglu:jet/cx_voucher/jsonschema/1-0-0",
]
