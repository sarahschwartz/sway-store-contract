/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
  Forc version: 0.64.0
  Fuel-Core version: 0.37.0
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
} from 'fuels';

export type TestScriptInputs = [input: BigNumberish];
export type TestScriptOutput = BN;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [],
  "functions": [
    {
      "inputs": [
        {
          "name": "input",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "main",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const bytecode = decompressBytecode('H4sIAAAAAAAAA02Sv4sTQRzFX9YVgo2jbiTMeZricmwZsFGvcJbdsFlDcA4DWjhs7CzDInLl/glaqFdaWs6ChaWl5ZWW2wq3YCNErohvNobcNPPmM98fb76M/D3CG8BDu7yFWX/viPUa8lzjPTyhn1b6lcK1vMFj7j73hzquVjq1y2KCbjj2Sz2tFoWizgLw7meRUEcHysT2yEQAcyKnHd9LAiUiX5EdkUWsc0J9nXmv23pRUOq02tWOq7MtZ/wj+QsYrO7jxUXt6Yvap/eXMj5zPVw/VSQ+DhNAJkvoqT3NG3HLMe5Bfo4ePfTD5kCx7w/W7YfpV+f/pNDUWQ/sPWj1eOjy+ztuyy03z60wz+wNk9qbzpvIgrKXDfF2gg79XCXz9o6T8lAD4f5cyfkSIpurPAPcnETEOaW2zht9J2/UPr3f1bEdtX427++2evP+d5d4fYnXPD/Yne1kF2ftlpupva2PheD9Km8G9/QYrjZnm7i4BbX4X+9Lqzd9vm05/YpwFsBEo46ZjTCcAR+AKx+7nDH/iIw/Q6Y15B+e/wqckn/i/ZMVkPJH/QPs/31HYAIAAA==');

export class TestScript extends Script<TestScriptInputs, TestScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
