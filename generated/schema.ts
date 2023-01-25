// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Claim entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Claim must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Claim", id.toString(), this);
    }
  }

  static load(id: string): Claim | null {
    return changetype<Claim | null>(store.get("Claim", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): Bytes {
    let value = this.get("createdAt");
    return value!.toBytes();
  }

  set createdAt(value: Bytes) {
    this.set("createdAt", Value.fromBytes(value));
  }

  get shamanAddress(): Bytes {
    let value = this.get("shamanAddress");
    return value!.toBytes();
  }

  set shamanAddress(value: Bytes) {
    this.set("shamanAddress", Value.fromBytes(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get tx(): string {
    let value = this.get("tx");
    return value!.toString();
  }

  set tx(value: string) {
    this.set("tx", Value.fromString(value));
  }
}

export class TimelineEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TimelineEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TimelineEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TimelineEvent", id.toString(), this);
    }
  }

  static load(id: string): TimelineEvent | null {
    return changetype<TimelineEvent | null>(store.get("TimelineEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get createdBy(): Bytes {
    let value = this.get("createdBy");
    return value!.toBytes();
  }

  set createdBy(value: Bytes) {
    this.set("createdBy", Value.fromBytes(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get shamanAddress(): Bytes {
    let value = this.get("shamanAddress");
    return value!.toBytes();
  }

  set shamanAddress(value: Bytes) {
    this.set("shamanAddress", Value.fromBytes(value));
  }

  get claim(): string | null {
    let value = this.get("claim");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set claim(value: string | null) {
    if (!value) {
      this.unset("claim");
    } else {
      this.set("claim", Value.fromString(<string>value));
    }
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }
}

export class Shaman extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Shaman entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Shaman must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Shaman", id.toString(), this);
    }
  }

  static load(id: string): Shaman | null {
    return changetype<Shaman | null>(store.get("Shaman", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get baal(): Bytes {
    let value = this.get("baal");
    return value!.toBytes();
  }

  set baal(value: Bytes) {
    this.set("baal", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get interval(): BigInt {
    let value = this.get("interval");
    return value!.toBigInt();
  }

  set interval(value: BigInt) {
    this.set("interval", Value.fromBigInt(value));
  }

  get tokenPerSecond(): BigInt {
    let value = this.get("tokenPerSecond");
    return value!.toBigInt();
  }

  set tokenPerSecond(value: BigInt) {
    this.set("tokenPerSecond", Value.fromBigInt(value));
  }

  get valueScalePercs(): Array<BigInt> {
    let value = this.get("valueScalePercs");
    return value!.toBigIntArray();
  }

  set valueScalePercs(value: Array<BigInt>) {
    this.set("valueScalePercs", Value.fromBigIntArray(value));
  }

  get teamLead(): Bytes {
    let value = this.get("teamLead");
    return value!.toBytes();
  }

  set teamLead(value: Bytes) {
    this.set("teamLead", Value.fromBytes(value));
  }

  get sharesOrLoot(): boolean {
    let value = this.get("sharesOrLoot");
    return value!.toBoolean();
  }

  set sharesOrLoot(value: boolean) {
    this.set("sharesOrLoot", Value.fromBoolean(value));
  }

  get summoner(): Bytes {
    let value = this.get("summoner");
    return value!.toBytes();
  }

  set summoner(value: Bytes) {
    this.set("summoner", Value.fromBytes(value));
  }

  get timeline(): Array<string> {
    let value = this.get("timeline");
    return value!.toStringArray();
  }

  set timeline(value: Array<string>) {
    this.set("timeline", Value.fromStringArray(value));
  }
}

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Factory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Factory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Factory", id.toString(), this);
    }
  }

  static load(id: string): Factory | null {
    return changetype<Factory | null>(store.get("Factory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get shamans(): Array<string> {
    let value = this.get("shamans");
    return value!.toStringArray();
  }

  set shamans(value: Array<string>) {
    this.set("shamans", Value.fromStringArray(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class EventTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EventTransaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EventTransaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EventTransaction", id.toString(), this);
    }
  }

  static load(id: string): EventTransaction | null {
    return changetype<EventTransaction | null>(
      store.get("EventTransaction", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}
