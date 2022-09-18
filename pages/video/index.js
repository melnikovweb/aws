import Tools from 'components/Video/ui/Tools'
import Section from 'components/Video/ui/Section'
import Buttons from 'components/Video/ui/Buttons'
import TopContent from 'components/Video/ui/TopContentBlock'
import VideoBoxes from 'components/Video/ui/VideoBoxes'
import PriceBoxes from 'components/Video/ui/PriceBoxes'
import ExpertBoxes from 'components/Video/ui/ExpertBoxes'

import DecorBgBall from 'components/Icons/BgBall'
import DecorBgVideo from 'components/Icons/BgVideo'
import DecorBgMusic from 'components/Icons/BgMusic'
import DecorBgCircle from 'components/Icons/BgCircle'

import styles from './Video.module.less'

import PriceBoxList from 'datastore/Video_PriceBoxList'
import VideoList from 'datastore/Video_VideoList'
import ToolsList from 'datastore/Video_ToolsList'
import ExpertBoxList from 'datastore/Video_ExpertBoxList'

import VideoAppLayout from 'layouts/VideoAppLayout'

const Video = props => {
  return (
    <>
      <div className={styles['page-decor']}>
        <DecorBgCircle className={styles['page-decor-circle']} />
        <div
          className={[styles['page-decor-boxed'], styles.container].join(' ')}
        >
          <DecorBgMusic className={styles['page-decor-music']} />
          <DecorBgVideo className={styles['page-decor-video']} />
          <DecorBgBall className={styles['page-decor-ball']} />
        </div>
      </div>

      <div className={styles['page-video']}>
        <TopContent
          className={styles.pageVideoTop}
          title={'Idea.Skill.Realization'}
          description={'Creating a turnkey digital video products'}
        />
        <Section
          title={'Video editing'}
          description={'Individual approach to the solution of creative tasks.'}
          imageLink="/static/video/video-photo.png"
        >
          <p>
            Binerals' video experts create video content of any complexity and
            audacity. 9 years of professional activity. We managed to try
            ourselves in all possible genres: from standard "conveyor" for
            social networks to big-SHOWs. To create video clips, our video
            editors use the entire arsenal of knowledge of drama and audience
            psychology. In building professional relationships, our priorities
            are honesty and the ability to value both your and our time.
          </p>
          <ExpertBoxes list={ExpertBoxList} />
        </Section>
        <Section className={styles['section-cover']}>
          <VideoBoxes list={VideoList} />
        </Section>
        <Section
          title={'Tools'}
          description={
            'We implement  creative intuition using tools like Adobe Premier, Adobe After Effects, Adobe Photoshop, Light room, Blender.'
          }
        >
          <Tools list={ToolsList} />
        </Section>
        <Section
          id={'consulting'}
          title={'Consulting and prices'}
          description={
            'HOW MUCH DOES VIDEO EDITING COST?\n The price is negotiable. In our prices, we consider only the time spent on creating the video and the tools involved.'
          }
        >
          <PriceBoxes list={PriceBoxList} />
        </Section>
        <Section
          className={styles['section-cover']}
          title={'How can you be sure of\n our productivity?'}
          description={'We appreciate your and our time'}
        >
          <ul className={styles['list-productivity']}>
            <li className={styles['list-productivity-item']}>
              DEAL via UPWORK (SOME EXTRA FEES APPLIED)
            </li>
            <li className={styles['list-productivity-item']}>
              WORK HOURS TRACKER (GOOGLE CLOCKIFY APP)
            </li>
            <li className={styles['list-productivity-item']}>
              REMOTE PROCESS MONITORING (TEAMVIEWER)
            </li>
            <li className={styles['list-productivity-item']}>
              REPORTING (WRITTEN, WRITTEN + PREVIEW-RENDER)"
            </li>
          </ul>
        </Section>
        <Section imageLink="/static/video/loving-photo.png">
          <h2>Loving our work</h2>
          <p>
            Nine years of experience allows us to quickly deal with Routine
            work. Time released we spend on every detail to create a truly
            unique content
          </p>
          <Buttons />
        </Section>
      </div>
    </>
  )
}

Video.layout = VideoAppLayout

export default Video
