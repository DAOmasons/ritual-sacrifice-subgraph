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

  get shaman(): string {
    let value = this.get("shaman");
    return value!.toString();
  }

  set shaman(value: string) {
    this.set("shaman", Value.fromString(value));
  }

  get projectMetadata(): string | null {
    let value = this.get("projectMetadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set projectMetadata(value: string | null) {
    if (!value) {
      this.unset("projectMetadata");
    } else {
      this.set("projectMetadata", Value.fromString(<string>value));
    }
  }

  get totalSecondsWorked(): BigInt | null {
    let value = this.get("totalSecondsWorked");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalSecondsWorked(value: BigInt | null) {
    if (!value) {
      this.unset("totalSecondsWorked");
    } else {
      this.set("totalSecondsWorked", Value.fromBigInt(<BigInt>value));
    }
  }

  get sessionsTime(): Array<BigInt> | null {
    let value = this.get("sessionsTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set sessionsTime(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("sessionsTime");
    } else {
      this.set("sessionsTime", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get sessionsValue(): Array<i32> | null {
    let value = this.get("sessionsValue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toI32Array();
    }
  }

  set sessionsValue(value: Array<i32> | null) {
    if (!value) {
      this.unset("sessionsValue");
    } else {
      this.set("sessionsValue", Value.fromI32Array(<Array<i32>>value));
    }
  }

  get totalAmountClaimed(): BigInt | null {
    let value = this.get("totalAmountClaimed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalAmountClaimed(value: BigInt | null) {
    if (!value) {
      this.unset("totalAmountClaimed");
    } else {
      this.set("totalAmountClaimed", Value.fromBigInt(<BigInt>value));
    }
  }

  get isLocked(): boolean {
    let value = this.get("isLocked");
    return value!.toBoolean();
  }

  set isLocked(value: boolean) {
    this.set("isLocked", Value.fromBoolean(value));
  }

  get mutinyFrom(): Bytes | null {
    let value = this.get("mutinyFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set mutinyFrom(value: Bytes | null) {
    if (!value) {
      this.unset("mutinyFrom");
    } else {
      this.set("mutinyFrom", Value.fromBytes(<Bytes>value));
    }
  }

  get mutinyTo(): Bytes | null {
    let value = this.get("mutinyTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set mutinyTo(value: Bytes | null) {
    if (!value) {
      this.unset("mutinyTo");
    } else {
      this.set("mutinyTo", Value.fromBytes(<Bytes>value));
    }
  }

  get updateIntervalFrom(): BigInt | null {
    let value = this.get("updateIntervalFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updateIntervalFrom(value: BigInt | null) {
    if (!value) {
      this.unset("updateIntervalFrom");
    } else {
      this.set("updateIntervalFrom", Value.fromBigInt(<BigInt>value));
    }
  }

  get updateIntervalTo(): BigInt | null {
    let value = this.get("updateIntervalTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updateIntervalTo(value: BigInt | null) {
    if (!value) {
      this.unset("updateIntervalTo");
    } else {
      this.set("updateIntervalTo", Value.fromBigInt(<BigInt>value));
    }
  }

  get updateTokenPerSecondFrom(): BigInt | null {
    let value = this.get("updateTokenPerSecondFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updateTokenPerSecondFrom(value: BigInt | null) {
    if (!value) {
      this.unset("updateTokenPerSecondFrom");
    } else {
      this.set("updateTokenPerSecondFrom", Value.fromBigInt(<BigInt>value));
    }
  }

  get updateTokenPerSecondTo(): BigInt | null {
    let value = this.get("updateTokenPerSecondTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set updateTokenPerSecondTo(value: BigInt | null) {
    if (!value) {
      this.unset("updateTokenPerSecondTo");
    } else {
      this.set("updateTokenPerSecondTo", Value.fromBigInt(<BigInt>value));
    }
  }

  get updatePercsFrom(): Array<BigInt> | null {
    let value = this.get("updatePercsFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set updatePercsFrom(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("updatePercsFrom");
    } else {
      this.set("updatePercsFrom", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get updatePercsTo(): Array<BigInt> | null {
    let value = this.get("updatePercsTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set updatePercsTo(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("updatePercsTo");
    } else {
      this.set("updatePercsTo", Value.fromBigIntArray(<Array<BigInt>>value));
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

  get isLocked(): boolean {
    let value = this.get("isLocked");
    return value!.toBoolean();
  }

  set isLocked(value: boolean) {
    this.set("isLocked", Value.fromBoolean(value));
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

  get projectMetadata(): string {
    let value = this.get("projectMetadata");
    return value!.toString();
  }

  set projectMetadata(value: string) {
    this.set("projectMetadata", Value.fromString(value));
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
