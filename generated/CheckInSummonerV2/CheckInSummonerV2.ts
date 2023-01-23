// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CheckInSummonComplete extends ethereum.Event {
  get params(): CheckInSummonComplete__Params {
    return new CheckInSummonComplete__Params(this);
  }
}

export class CheckInSummonComplete__Params {
  _event: CheckInSummonComplete;

  constructor(event: CheckInSummonComplete) {
    this._event = event;
  }

  get baal(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get summoner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shamanAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get teamLead(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get sharesOrLoot(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get tokenPerSecond(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get checkInInterval(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get valueScalePercs(): Array<BigInt> {
    return this._event.parameters[7].value.toBigIntArray();
  }

  get isLocked(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }

  get projectMetadata(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class CheckInSummonerV2 extends ethereum.SmartContract {
  static bind(address: Address): CheckInSummonerV2 {
    return new CheckInSummonerV2("CheckInSummonerV2", address);
  }

  summon(
    _baal: Address,
    _teamLead: Address,
    _sharesOrLoot: boolean,
    _tokenPerSecond: BigInt,
    _checkInInterval: BigInt,
    _valueScalePercs: Array<BigInt>,
    _shouldLock: boolean,
    _projectMetadata: string
  ): Address {
    let result = super.call(
      "summon",
      "summon(address,address,bool,uint256,uint256,uint32[5],bool,string):(address)",
      [
        ethereum.Value.fromAddress(_baal),
        ethereum.Value.fromAddress(_teamLead),
        ethereum.Value.fromBoolean(_sharesOrLoot),
        ethereum.Value.fromUnsignedBigInt(_tokenPerSecond),
        ethereum.Value.fromUnsignedBigInt(_checkInInterval),
        ethereum.Value.fromUnsignedBigIntArray(_valueScalePercs),
        ethereum.Value.fromBoolean(_shouldLock),
        ethereum.Value.fromString(_projectMetadata)
      ]
    );

    return result[0].toAddress();
  }

  try_summon(
    _baal: Address,
    _teamLead: Address,
    _sharesOrLoot: boolean,
    _tokenPerSecond: BigInt,
    _checkInInterval: BigInt,
    _valueScalePercs: Array<BigInt>,
    _shouldLock: boolean,
    _projectMetadata: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "summon",
      "summon(address,address,bool,uint256,uint256,uint32[5],bool,string):(address)",
      [
        ethereum.Value.fromAddress(_baal),
        ethereum.Value.fromAddress(_teamLead),
        ethereum.Value.fromBoolean(_sharesOrLoot),
        ethereum.Value.fromUnsignedBigInt(_tokenPerSecond),
        ethereum.Value.fromUnsignedBigInt(_checkInInterval),
        ethereum.Value.fromUnsignedBigIntArray(_valueScalePercs),
        ethereum.Value.fromBoolean(_shouldLock),
        ethereum.Value.fromString(_projectMetadata)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  template(): Address {
    let result = super.call("template", "template():(address)", []);

    return result[0].toAddress();
  }

  try_template(): ethereum.CallResult<Address> {
    let result = super.tryCall("template", "template():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SummonCall extends ethereum.Call {
  get inputs(): SummonCall__Inputs {
    return new SummonCall__Inputs(this);
  }

  get outputs(): SummonCall__Outputs {
    return new SummonCall__Outputs(this);
  }
}

export class SummonCall__Inputs {
  _call: SummonCall;

  constructor(call: SummonCall) {
    this._call = call;
  }

  get _baal(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _teamLead(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _sharesOrLoot(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _tokenPerSecond(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _checkInInterval(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _valueScalePercs(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }

  get _shouldLock(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }

  get _projectMetadata(): string {
    return this._call.inputValues[7].value.toString();
  }
}

export class SummonCall__Outputs {
  _call: SummonCall;

  constructor(call: SummonCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}