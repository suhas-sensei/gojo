export const OrderHandlerABI = [
  {
    "type": "impl",
    "name": "OrderHandlerImpl",
    "interface_name": "satoru::exchange::order_handler::IOrderHandler"
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::starknet::contract_address::ContractAddress>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::starknet::contract_address::ContractAddress>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>",
    "members": [
      {
        "name": "snapshot",
        "type": "core::array::Span::<core::starknet::contract_address::ContractAddress>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "enum",
    "name": "satoru::order::order::OrderType",
    "variants": [
      {
        "name": "MarketSwap",
        "type": "()"
      },
      {
        "name": "LimitSwap",
        "type": "()"
      },
      {
        "name": "MarketIncrease",
        "type": "()"
      },
      {
        "name": "LimitIncrease",
        "type": "()"
      },
      {
        "name": "MarketDecrease",
        "type": "()"
      },
      {
        "name": "LimitDecrease",
        "type": "()"
      },
      {
        "name": "StopLossDecrease",
        "type": "()"
      },
      {
        "name": "Liquidation",
        "type": "()"
      }
    ]
  },
  {
    "type": "enum",
    "name": "satoru::order::order::DecreasePositionSwapType",
    "variants": [
      {
        "name": "NoSwap",
        "type": "()"
      },
      {
        "name": "SwapPnlTokenToCollateralToken",
        "type": "()"
      },
      {
        "name": "SwapCollateralTokenToPnlToken",
        "type": "()"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::order::base_order_utils::CreateOrderParams",
    "members": [
      {
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "callback_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ui_fee_receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_collateral_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "size_delta_usd",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_collateral_delta_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "trigger_price",
        "type": "core::integer::u256"
      },
      {
        "name": "acceptable_price",
        "type": "core::integer::u256"
      },
      {
        "name": "execution_fee",
        "type": "core::integer::u256"
      },
      {
        "name": "callback_gas_limit",
        "type": "core::integer::u256"
      },
      {
        "name": "min_output_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "order_type",
        "type": "satoru::order::order::OrderType"
      },
      {
        "name": "decrease_position_swap_type",
        "type": "satoru::order::order::DecreasePositionSwapType"
      },
      {
        "name": "is_long",
        "type": "core::bool"
      },
      {
        "name": "referral_code",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::order::order::Order",
    "members": [
      {
        "name": "key",
        "type": "core::felt252"
      },
      {
        "name": "order_type",
        "type": "satoru::order::order::OrderType"
      },
      {
        "name": "decrease_position_swap_type",
        "type": "satoru::order::order::DecreasePositionSwapType"
      },
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "callback_contract",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ui_fee_receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "market",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "initial_collateral_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "swap_path",
        "type": "satoru::utils::span32::Span32::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "size_delta_usd",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_collateral_delta_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "trigger_price",
        "type": "core::integer::u256"
      },
      {
        "name": "acceptable_price",
        "type": "core::integer::u256"
      },
      {
        "name": "execution_fee",
        "type": "core::integer::u256"
      },
      {
        "name": "callback_gas_limit",
        "type": "core::integer::u256"
      },
      {
        "name": "min_output_amount",
        "type": "core::integer::u256"
      },
      {
        "name": "updated_at_block",
        "type": "core::integer::u64"
      },
      {
        "name": "is_long",
        "type": "core::bool"
      },
      {
        "name": "is_frozen",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::felt252>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::felt252>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::oracle::oracle_utils::SetPricesParams",
    "members": [
      {
        "name": "signer_info",
        "type": "core::integer::u256"
      },
      {
        "name": "tokens",
        "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "compacted_min_oracle_block_numbers",
        "type": "core::array::Array::<core::integer::u64>"
      },
      {
        "name": "compacted_max_oracle_block_numbers",
        "type": "core::array::Array::<core::integer::u64>"
      },
      {
        "name": "compacted_oracle_timestamps",
        "type": "core::array::Array::<core::integer::u64>"
      },
      {
        "name": "compacted_decimals",
        "type": "core::array::Array::<core::integer::u256>"
      },
      {
        "name": "compacted_min_prices",
        "type": "core::array::Array::<core::integer::u256>"
      },
      {
        "name": "compacted_min_prices_indexes",
        "type": "core::array::Array::<core::integer::u256>"
      },
      {
        "name": "compacted_max_prices",
        "type": "core::array::Array::<core::integer::u256>"
      },
      {
        "name": "compacted_max_prices_indexes",
        "type": "core::array::Array::<core::integer::u256>"
      },
      {
        "name": "signatures",
        "type": "core::array::Array::<core::array::Span::<core::felt252>>"
      },
      {
        "name": "price_feed_tokens",
        "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::price::price::Price",
    "members": [
      {
        "name": "min",
        "type": "core::integer::u256"
      },
      {
        "name": "max",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "struct",
    "name": "satoru::oracle::oracle_utils::SimulatePricesParams",
    "members": [
      {
        "name": "primary_tokens",
        "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
      },
      {
        "name": "primary_prices",
        "type": "core::array::Array::<satoru::price::price::Price>"
      }
    ]
  },
  {
    "type": "interface",
    "name": "satoru::exchange::order_handler::IOrderHandler",
    "items": [
      {
        "type": "function",
        "name": "create_order",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "params",
            "type": "satoru::order::base_order_utils::CreateOrderParams"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "update_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "size_delta_usd",
            "type": "core::integer::u256"
          },
          {
            "name": "acceptable_price",
            "type": "core::integer::u256"
          },
          {
            "name": "trigger_price",
            "type": "core::integer::u256"
          },
          {
            "name": "min_output_amount",
            "type": "core::integer::u256"
          },
          {
            "name": "order",
            "type": "satoru::order::order::Order"
          }
        ],
        "outputs": [
          {
            "type": "satoru::order::order::Order"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "cancel_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "execute_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "oracle_params",
            "type": "satoru::oracle::oracle_utils::SetPricesParams"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "execute_order_keeper",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "oracle_params",
            "type": "satoru::oracle::oracle_utils::SetPricesParams"
          },
          {
            "name": "keeper",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "simulate_execute_order",
        "inputs": [
          {
            "name": "key",
            "type": "core::felt252"
          },
          {
            "name": "params",
            "type": "satoru::oracle::oracle_utils::SimulatePricesParams"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "data_store_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "role_store_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "event_emitter_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "order_vault_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "oracle_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "swap_handler_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "referral_storage_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "order_utils_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      },
      {
        "name": "increase_order_utils_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      },
      {
        "name": "decrease_order_utils_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      },
      {
        "name": "swap_order_utils_class_hash",
        "type": "core::starknet::class_hash::ClassHash"
      }
    ]
  },
  {
    "type": "event",
    "name": "satoru::exchange::order_handler::OrderHandler::Event",
    "kind": "enum",
    "variants": []
  }
] as const;
