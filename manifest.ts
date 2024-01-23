import { Manifest } from './deps.ts'
import { sources } from "./config/sources.ts";
import { Deposit } from "./entities/deposit.ts";
import { Withdraw } from "./entities/withdraw.ts";
import { createContractConfig } from "./config/contract.ts";

export default new Manifest("pool")
.addEntities([
  Deposit,
  Withdraw,
])
.addChain(
  "optimism",
  (chain) =>
    chain.setOptions({ rpcUrl: "YOUR RPC" }).addContract(
      createContractConfig(sources.optimism),
    ),
)
.addChain(
  "evmos",
  (chain) =>
    chain.setOptions({ rpcUrl: "YOUR RPC" }).addContract(
      createContractConfig(sources.evmos),
    ),
)
.build();