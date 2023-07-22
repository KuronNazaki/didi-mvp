import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PlannerCard } from '../Card';
import { StyleSheet } from 'react-native';
import StyledImage from '../StyledImage';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import HeartSvg from '../../assets/heart-circle.svg';
import MessageSvg from '../../assets/message-text-1.svg';

const CommunityPost = ({ navigation, post }) => {
  return (
    <View
      className={`p-[10] bg-slate-100 rounded-xl`}
      style={{ rowGap: 10 }}
    >
      <View className={`flex-row items-center`} style={{ columnGap: 5 }}>
        <StyledImage
          size={50}
          relativeSrc={
            post.avatarUrl
              ? post.avatarUrl
              : require('./../../assets/avatar.png')
          }
        />
        <View style={{ rowGap: 2 }}>
          <Text
            className={`text-ink-primary`}
            style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
          >
            {post.originalPoster}
          </Text>
          <Text
            className={`text-ink-secondary`}
            style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
          >
            {post.time}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ ...GLOBAL_TEXT_STYLES.regular10 }}>{post.caption}</Text>
      </View>
      <PlannerCard
        key={1}
        isIncludedInPost
        title={post.plan.title}
        image={post.plan.imageUrl}
        location={post.plan.location}
        startDate={new Date(post.plan.startDate)}
        endDate={new Date(post.plan.endDate)}
        description={post.plan.planDescription}
        fullWidth
        // onPress={() => {
        //   navigation.navigate('IndividualPlan', {
        //     plan: JSON.stringify(post.plan),
        //   });
        // }}
      />
      <View className={`flex-row`} style={{ columnGap: 10 }}>
        <TouchableOpacity
          className={`flex-row items-center`}
          style={{ columnGap: 5 }}
        >
          <HeartSvg color={GLOBAL_COLORS.INK.primary} width={30} height={30} />
          <Text
            className={`text-ink-secondary`}
            style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
          >
            {post.like}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-row items-center`}
          style={{ columnGap: 5 }}
        >
          <MessageSvg
            color={GLOBAL_COLORS.INK.primary}
            width={30}
            height={30}
          />
          <Text
            className={`text-ink-secondary`}
            style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
          >
            {post.comment.count}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{rowGap: 5}}>
        {post?.comment?.comments && post?.comment?.comments?.length > 0 ? (
          post.comment.comments.map((item, index) => (
            <View className={`flex-row w-full overflow-hidden`} style={{ columnGap: 5 }} key={index}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                className={`text-ink-primary`}
              >
                {item.commenter}
              </Text>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.regular10, fontSize: 17 }}
                className={`text-ink-secondary`}
              >
                {item.content}
              </Text>
            </View>
          ))
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default CommunityPost;
