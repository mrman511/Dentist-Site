function AppointmentForm ({ styles }){

  return (
    <section className={ styles.appointmentForm }>
      <div className={ styles.formHeader }>
        <h3>To Enquire about an Appointment</h3>
        <p>Please submit this form</p>
      </div>
      <form action="">
        <div className={ `${styles.formInput} ${styles.formName}` }>
          <label>Your Name:</label>
          <input type="text" name='name' />
        </div>

        {/* <div>
          <label for='name'>Your email:</label>
          <input type="email" name='email' />
        </div> */}

        <div className={ `${styles.formInput} ${styles.formEmail}` }>
          <label>Your email:</label>
          <input type="email" name='email' />
        </div>

        <div className={ `${styles.formInput} ${styles.formReason}` }>
          <label>Reason for Appointment</label>
          <textarea type="text" name="type"/>
        </div>

        <div className={ styles.preferences }>
          <div className={ styles.timePreferences }>
            <label>Prefered Time</label>
            <select name="time" id="" multiple>
              <option value="9">9:00am</option>
              <option value="10">10:00am</option>
              <option value="11">11:00am</option>
              <option value="12">12:00pm</option>
              <option value="1">1:00pm</option>
              <option value="2">2:00pm</option>
              <option value="3">3:00pm</option>
              <option value="4">4:00pm</option>
              <option value="5">5:00pm</option>
            </select>
          </div>

          <div className={ styles.dayPreferences }>
            <label>Prefered Day</label>
            <select name="day" id="" multiple>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
        </div>

        <input type="submit" className={ `${styles.btn} ${styles.btnLg}` } />
      </form>

    </section>
  );
}

export default AppointmentForm;