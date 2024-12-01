// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

class MockEventTarget extends EventTarget {
  onclick?: MockEventHandler;
}

class MockEvent extends Event {
  value: number 
  constructor(type: string, value: number) {
    super(type);
    this.value = value;
  }
}

interface MockEventHandler {
  (evt: MockEvent): any;
}

describe('API - EventTarget', () => {

  test('binds events via addEventListener', () => {
    const c = new MockEventTarget();
    const events: string[] = [];

    expect(c.onclick).toBeUndefined();

    c.addEventListener('click', (evt: Event) => {
      events.push(evt.type);
    });


    // c.addEventListener('click', (evt: MockEvent) => { 
    //   events.push(`${evt}-1`) } 
    // );
    // c.addEventListener('click', ({ value }: MockEvent) => { events.push(`${value}-2`) } );
    // c.addEventListener('scroll', ({ value }: MockEvent) => { events.push(value) } );

    c.dispatchEvent(new Event('click') );
    expect(c.onclick).not.toBeNull();

    // assert.deepEqual(events, ['hello-1', 'hello-2']);

    // c.dispatchEvent('scroll', { value: 'hello' });
    expect(events).toEqual(['click']);
  });

  // it('removes events via removeEventListener', () => {
  //   const c = new MockTarget();
  //   const events = [];
  //   const c1 = ({ value }) => events.push(`${value}-1`);
  //   const c2 = ({ value }) => events.push(`${value}-2`);
  //   c.addEventListener('click', c1);
  //   c.addEventListener('click', c2);

  //   c.dispatchEvent('click', { value: 'hello' });
  //   assert.deepEqual(events, ['hello-1', 'hello-2']);

  //   c.removeEventListener('click', c2);
  //   c.dispatchEvent('click', { value: 'world' });
  //   assert.deepEqual(events, ['hello-1', 'hello-2', 'world-1']);

  //   c.removeEventListener('click', c1);
  //   c.dispatchEvent('click', { value: 'hello' });
  //   assert.deepEqual(events, ['hello-1', 'hello-2', 'world-1']);
  // });

  // it('fires handlers stored as `on${type}` attributes', () => {
  //   const c = new ChildTarget();
  //   const events: string[] = [];
  //   const c1 = ({ value }) => { events.push(`${value}-1`) };
  //   const c2 = ({ value }) => { events.push(`${value}-2`) };
  //   c.addEventListener('click', c1);
  //   c.onclick = c2;
  //   c.dispatchEvent('click', { value: 'hello' });
  //   expect(events).(['hello-1', 'hello-2']);
  // });

});
