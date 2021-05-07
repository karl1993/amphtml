/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Observable} from '../core/data-structures/observable';

export class VideoSessionManager {
  /**
   * Creates an instance of VideoSessionManager.
   */
  constructor() {
    /** @private */
    this.isSessionActive_ = false;

    /** @private */
    this.endSessionObservable_ = new Observable();
  }

  /**
   * Register a listener to be notified when a session has ended
   * @param {!Function} listener
   */
  onSessionEnd(listener) {
    this.endSessionObservable_.add(listener);
  }

  /**
   * Begin a session.
   */
  beginSession() {
    this.isSessionActive_ = true;
  }

  /**
   * End a session.
   */
  endSession() {
    if (this.isSessionActive_) {
      this.endSessionObservable_.fire();
    }
    this.isSessionActive_ = false;
  }

  /**
   * Get the current session state.
   * @return {*} TODO(#23582): Specify return type
   */
  isSessionActive() {
    return this.isSessionActive_;
  }
}
